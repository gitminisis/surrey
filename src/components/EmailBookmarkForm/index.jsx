import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Modal,
  ModalDialog,
  FormControl,
  FormLabel,
  Stack,
  ModalClose,
  Input,
  Textarea,
} from "@mui/joy";
import { useSnackbar } from "notistack";
import { deepSearch, sendEmailBookmark } from "../../utils/functions";
import {
  TITLE_BY_DATABASE,
  getRecordPermalink,
  getEmailPermalink,
  getRecordTitle,
} from "../../utils/record";
const FORM_FIELD = [
  {
    label: "Full Name*",
    id: "fullName",
    title: "Full Name",
  },
  {
    label: "Email Address*",
    id: "emailAddress",
    title: "Email Address",
  },
];
const EmailBookmarkForm = (props) => {
  const { xml, open, setOpen } = props;
  const { enqueueSnackbar } = useSnackbar();
  const [formValue, setFormValue] = useState(FORM_FIELD);
  const session = deepSearch(xml, "session")[0];

  const handleInputChange = (value, id) => {
    let newValue = formValue.map((e) => {
      if (e.id === id) {
        e.value = value;
      }
      return e;
    });
    setFormValue(newValue);
  };
  return (
    <Modal onClose={() => setOpen(false)} open={open} data-aos="fade-down">
      <ModalDialog
        color="neutral"
        layout="center"
        size="lg"
        variant="plain"
        sx={{ width: "90vw", maxWidth: "400px" }}
      >
        <ModalClose
          variant="outlined"
          sx={{
            top: "calc(-1/4 * var(--IconButton-size))",
            right: "calc(-1/4 * var(--IconButton-size))",
            boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
            borderRadius: "50%",
            bgcolor: "background.body",
          }}
        />
        <form
          onSubmit={(event) => {
            let body = deepSearch(xml, "xml_record")[0];
            if (!Array.isArray(body)) {
              body = [body];
            }
            body = body
              .map((record, i) => {
                let sisn = deepSearch(record, "link_sisn")[0];
                let database = deepSearch(record, "database_name")[0];
                let permarLink = getEmailPermalink(sisn, database);
                let title = deepSearch(record, TITLE_BY_DATABASE[database])[0];
                let text = `Record Title: ${title} \nRecord URL: ${permarLink} `;
                // console.log(record);
                return text;
              })
              .join(
                "\n\n =======================================================\n\n"
              );

            event.preventDefault();
            sendEmailBookmark(session, formValue, body).then((res) => {
              enqueueSnackbar(`Your bookmark(s) list has been sent.`);
              setOpen(false);
            });
          }}
        >
          <Stack spacing={2}>
            {formValue.map((field, index) => (
              <FormControl key={index}>
                <FormLabel>{field.label}</FormLabel>
                <Input
                  onChange={(e) => {
                    handleInputChange(e.target.value, field.id);
                  }}
                  id={field.id}
                  aria-label={field.title}
                  required
                />
              </FormControl>
            ))}

            <Button type="submit">Submit</Button>
          </Stack>
        </form>
      </ModalDialog>
    </Modal>
  );
};

EmailBookmarkForm.propTypes = {};

export default EmailBookmarkForm;
