import IconButton from "@mui/joy/IconButton";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import LinkIcon from "@mui/icons-material/Link";
import {
  bookmarkRecord,
  copyToClipboard,
  nextRecordURL,
  backToSummary,
  previousRecordURL,
  viewBookmark,
} from "../../utils/record";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { useSnackbar } from "notistack";
import { printPage, deepSearch } from "../../utils/functions";
import PrintIcon from "@mui/icons-material/Print";
import { Tooltip } from "@mui/material";
import UndoIcon from "@mui/icons-material/Undo";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Badge from "@mui/joy/Badge";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
const DetailRecordAction = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const { database, url, sisn, updateXML, isBookmarked, size, xml } = props;

  let bookmarkCount = deepSearch(xml, "bookmark_count");
  let next = nextRecordURL(xml);
  let previous = previousRecordURL(xml);
  let toSummary = backToSummary(xml);
  return (
    <div className="recordAction">
      <Tooltip title="Previous Record">
        <IconButton
          disabled={!previous}
          aria-label="go to previous record"
          variant="plain"
          color="primary"
          size={size || "md"}
          onClick={(_) => {
            window.location = previous;
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Return to summary page">
        <IconButton
          disabled={!toSummary}
          aria-label="return to summary page"
          variant={"plain"}
          color="primary"
          size={size || "md"}
          onClick={(_) => {
            window.location = toSummary;
          }}
        >
          <UndoIcon />
        </IconButton>
      </Tooltip>

      <Tooltip
        title={
          isBookmarked === "true"
            ? "Added to the bookmark"
            : "Bookmark this record"
        }
      >
        <IconButton
          aria-label="bookmark"
          variant={isBookmarked === "true" ? "soft" : "plain"}
          color="primary"
          size={size || "md"}
          onClick={(_) => {
            if (isBookmarked === "true") {
              enqueueSnackbar("This record has already been bookmarked");
              return;
            }
            enqueueSnackbar(`Adding record SISN #${sisn} to the bookmark ...`, {
              variant: "info",
            });
            bookmarkRecord(url, sisn, database).then((_) => {
              enqueueSnackbar(
                `Record SISN #${sisn} has been successfully added to the bookmark!`
              );
              setTimeout(() => {
                location.reload();
              }, 2000);
            });
          }}
        >
          {isBookmarked === "true" ? <BookmarkAddedIcon /> : <BookmarkAdd />}
        </IconButton>
      </Tooltip>

      <Tooltip title="View bookmarks">
        <IconButton
          aria-label="View bookmarks"
          variant="plain"
          color="primary"
          size={size || "md"}
          onClick={(_) => {
            viewBookmark(xml);
          }}
        >
          <Badge badgeContent={bookmarkCount} color="primary">
            <BookmarksIcon />
          </Badge>
        </IconButton>
      </Tooltip>

      <Tooltip title="Copy this record URL">
        <IconButton
          aria-label="copy link"
          variant="plain"
          color="primary"
          size={size || "md"}
          onClick={(_) => {
            copyToClipboard(sisn, database);
            enqueueSnackbar(`Copied to clipboard`);
          }}
        >
          <LinkIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Print this page">
        <IconButton
          aria-label="print page"
          variant="plain"
          color="primary"
          size={size || "md"}
          onClick={(_) => {
            printPage();
          }}
        >
          <PrintIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Next Record">
        <IconButton
          disabled={!next}
          aria-label="go to next record"
          variant="plain"
          color="primary"
          size={size || "md"}
          onClick={(_) => {
            window.location = next;
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

DetailRecordAction.propTypes = {};

export default DetailRecordAction;
