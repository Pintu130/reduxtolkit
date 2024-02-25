import React from "react";
import Button from "@mui/material/Button";
import CustomizedDialogs from "./Dilog";
const Addtodo = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="my-5 flex gap-10">
        <Button variant="contained" color="secondary" onClick={handleClickOpen}>
          Add User Data
        </Button>
      </div>

      <CustomizedDialogs open={open} setOpen={setOpen} />
    </>
  );
};

export default Addtodo;
