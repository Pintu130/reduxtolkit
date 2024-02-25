import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { setAddtodo, setUpdatetodo } from "../TodoFolder/todoSlice";
import { setEdititem } from "../TodoFolder/updateSlice";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({ open, setOpen, updateData }) {
  console.log("🚀------------updateData:", updateData);
  const dispatch = useDispatch();
  const isEdit = useSelector((state) => state?.edit?.isEdit);
  console.log("🚀 ~ CustomizedDialogs ~ isEdit:", isEdit);
  const [userData, setUserData] = React.useState({
    text: "",
    email: "",
    age: "",
    city: "",
    country: "",
  });
  React.useEffect(() => {
    if (updateData) {
      setUserData(updateData);
    }
  }, [updateData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addTodoList = () => {
    if (isEdit === "Edit") {
      // Dispatch action to update todo
      dispatch(
        setUpdatetodo({
          id: updateData.id, // Assuming you have an 'id' property in updateData
          newText: userData.text,
          newEmail: userData.email,
          newAge: userData.age,
          newCity: userData.city,
          newCountry: userData.country,
        })
      );
    } else {
      // Dispatch action to add new todo
      dispatch(setAddtodo(userData));
    }

    // Reset user data
    setUserData({
      text: "",
      email: "",
      age: "",
      city: "",
      country: "",
    });

    // Close the dialog
    handleClose();
  };

  const isFormValid = () => {
    // if (isEdit === "") {
    return Object.values(userData).every((value) => {
      if (typeof value === "string") {
        return value.trim() !== "";
      }
      return true; // Return true for non-string values
    });
    // }
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(setEdititem(""));
    setUserData({
      text: "",
      email: "",
      age: "",
      city: "",
      country: "",
    });
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          User Data Form
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers className="">
          <TextField
            id="outlined-basic"
            placeholder="Username"
            name="text"
            label="Username"
            variant="outlined"
            margin="dense"
            fullWidth
            value={userData.text}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            placeholder="Email"
            name="email"
            label="Email"
            variant="outlined"
            margin="dense"
            fullWidth
            value={userData.email}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            placeholder="Age"
            name="age"
            label="Age"
            variant="outlined"
            margin="dense"
            fullWidth
            value={userData.age}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            placeholder="City"
            name="city"
            label="City"
            variant="outlined"
            margin="dense"
            fullWidth
            value={userData.city}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            placeholder="Country"
            name="country"
            label="Country"
            variant="outlined"
            margin="dense"
            fullWidth
            value={userData.country}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => {
              handleClose();
            }}
            variant="contained"
            color="error"
          >
            Cancel
          </Button>

          <Button
            autoFocus
            onClick={() => {
              addTodoList();
              handleClose();
            }}
            // disabled={!isFormValid()}
            variant="contained"
            color="success"
          >
            {isEdit === "Edit" ? "Update" : "Save Data"}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
