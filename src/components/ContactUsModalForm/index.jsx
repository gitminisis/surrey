import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Typography,
  Divider,
  Box,
  Grid,
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
import { deepSearch } from "../../utils/functions";
import { getRecordPermalink } from "../../utils/record";
const ContactUsModalForm = (props) => {
  let { xml, description } = props;

  let sisn = deepSearch(xml, "sisn")[0];
  let database = deepSearch(xml, "database_name")[0];
  let recordURL = getRecordPermalink(sisn, database);
  const DEFAULT_TEXT_BODY = `Record URL: ${recordURL} \n`;
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(DEFAULT_TEXT_BODY);
  debugger;
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
        Submit an Inquiry
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
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Full Name *</FormLabel>
                <Input aria-label="Full Name" required />
              </FormControl>
              <FormControl>
                <FormLabel>Email Address *</FormLabel>
                <Input aria-label="Email Address" required />
              </FormControl>
              <FormControl>
                <FormLabel>Phone Number</FormLabel>
                <Input aria-label="Phone Number" required />
              </FormControl>
              <FormControl>
                <FormLabel>Subject *</FormLabel>
                <Input aria-label="Subject" required />
              </FormControl>
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

ContactUsModalForm.propTypes = {};

export default ContactUsModalForm;
