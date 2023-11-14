import  { useState } from "react";
import PropTypes from "prop-types";
import {
  Typography,
  Box,
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
import { deepSearch, sendEmail } from "../../utils/functions";
import { getEmailPermalink, getRecordPermalink } from "../../utils/record";
import { useSnackbar } from "notistack";
const ContactUsModalForm = (props) => {
  let { xml, description } = props;
  let sisn = deepSearch(xml, "sisn")[0];
  let database = deepSearch(xml, "database_name")[0];
  let recordURL = getEmailPermalink(sisn, database);
  let session = deepSearch(xml, "session")[0];
  const { enqueueSnackbar } = useSnackbar();
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
    {
      label: "Phone Number*",
      id: "phone",
      title: "Phone Number",
    },
    {
      label: "Subject*",
      id: "subject",
      title: "Subject",
    },
  ];
  const DEFAULT_TEXT_BODY = `Record URL: "${recordURL}" \n`;
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(DEFAULT_TEXT_BODY);
  const [formValue, setFormValue] = useState(FORM_FIELD);

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
    <Box sx={{ display: "flex", flexDirection: "column", marginTop: 4 }}>
      <Typography
        variant="soft"
        color="primary"
        component="a"
        fontSize="lg"
        level="h6"
        fontWeight={700}
      >
        {description}
      </Typography>
      <Button
        sx={{ width: "100%", maxWidth: "250px", margin: "16px auto" }}
        color="primary"
        onClick={function () {
          setOpen(true);
        }}
        size="md"
        variant="outlined"
      >
        Contact Us
      </Button>

      <Modal onClose={() => setOpen(false)} open={open} data-aos="fade-down">
        <ModalDialog
          color="neutral"
          layout="center"
          size="lg"
          variant="plain"
          sx={{ width: "90vw", maxWidth: "700px" }}
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
              event.preventDefault();
              sendEmail(session, formValue, text).then((res) => {
                enqueueSnackbar(`Your request has been sent.`);

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

              <FormControl>
                <FormLabel>Inquiry *</FormLabel>
                <Textarea
                  sx={{ height: "200px" }}
                  size="lg"
                  placeholder="Type something here ..."
                  defaultValue={text}
                  onChange={(event) => setText(event.target.value)}
                  endDecorator={
                    <Typography level="body3" sx={{ ml: "auto" }}>
                      {text.length} character(s)
                    </Typography>
                  }
                  required
                  aria-label="Inquiry"
                />
              </FormControl>
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </Box>
  );
};

ContactUsModalForm.propTypes = {
  xml: PropTypes.object,
  description: PropTypes.string,
};

export default ContactUsModalForm;
