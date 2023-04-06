import React from 'react'
import PropTypes from 'prop-types'

const EmailBookmarkForm = props => {
  return (
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
  )
}

EmailBookmarkForm.propTypes = {}

export default EmailBookmarkForm