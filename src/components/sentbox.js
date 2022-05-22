import React, { Fragment } from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import SendIcon from "@mui/icons-material/Send";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Sentbox = () => {
  const [value, setValue] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [erropen, seterrOpen] = React.useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleClick = () => {
    if (value === "") {
      seterrOpen(true);
    } else {
      setOpen(true);
      setValue("");
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    seterrOpen(false);
  };

  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          "& > :not(style)": {
            m: 1,
            width: 300,
            height: 140,
          },
        }}
      >
        <Paper sx={{backgroundColor:'#f7f7f7'}} variant="outlined">
          <Stack direction="row" spacing={1}>
            <Chip
              sx={{ backgroundColor: "#acccc4", marginLeft: 1, marginTop: 0.5 }}
              avatar={
                <Avatar
                  alt="Natacha"
                  src="https://www.newsfirst.lk/wp-content/uploads/2018/12/police-edited-_850x460_acf_cropped_850x460_acf_cropped_850x460_acf_cropped.jpg"
                />
              }
              label="From Admin to public : "
            />
          </Stack>

          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                id="outlined-textarea"
                label="Message"
                placeholder="Placeholder"
                multiline
                value={value}
                onChange={handleChange}
              />
            </div>
            <Button
              onClick={handleClick}
              sx={{
                backgroundColor: "#343c3c",
                marginLeft: 1,
                "&:hover": {
                  background: "#343c3c",
                },
              }}
              size="small"
              variant="contained"
              endIcon={<SendIcon />}
            >
              Send
            </Button>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Message sent successfully
              </Alert>
            </Snackbar>
            <Snackbar
              open={erropen}
              autoHideDuration={3000}
              onClose={handleClose}
            >
              <Alert
                onClose={handleClose}
                severity="error"
                sx={{ width: "100%" }}
              >
                Message field is empty!
              </Alert>
            </Snackbar>
          </Box>
        </Paper>
      </Box>
    </Fragment>
  );
};
export default Sentbox;
