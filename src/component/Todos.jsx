import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRemovetodo } from "../TodoFolder/todoSlice";
import { setEdititem } from "../TodoFolder/updateSlice";
import { AgGridReact } from "ag-grid-react"; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import Button from "@mui/material/Button";
import CustomizedDialogs from "./Dilog";

const Todos = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const tableRef = useRef(null);
  const [open, setOpen] = React.useState(false);
  const [rowData, setRowData] = useState(todos);
  const [updateData, setupdateData] = useState("");
  console.log(updateData, "afkajfafiehf---------");

  console.log("🚀 ~ Todos ~ rowData:", rowData);

  const [colDefs] = useState([
    {
      field: "id",
      headerName: "Unique_ID",
      width: 170,
    },
    {
      field: "text",
      headerName: "Name",
    },
    {
      field: "email",
      headerName: "Email",
    },
    {
      field: "age",
      headerName: "Age",
      width: 80,
    },
    {
      field: "city",
      headerName: "City",
      width: 120,
    },
    {
      field: "country",
      headerName: "Country",
      width: 120,
    },
    {
      field: "id",
      headerName: "Action",
      width: 140,
      cellRenderer: (parems) => (
        <div>
          <Button
            variant="contained"
            color="error"
            onClick={() => handelGetId(parems.value)}
          >
            Delete
          </Button>
        </div>
      ),
    },
    {
      field: "",
      headerName: "Edit",
      width: 140,
      cellRenderer: (parems) => (
        <div>
          <Button
            variant="contained"
            color="info"
            onClick={(e) => handelEdit(e, parems.data)}
          >
            Update
          </Button>
        </div>
      ),
    },
  ]);
  const gridOptions = {
    defaultColDef: {
      // width: 170, // Set your default width here
    }
  };
  const handelGetId = (id) => {
    dispatch(setRemovetodo(id));
  };
  const handelEdit = (e, data) => {
    setupdateData(data);
    e.stopPropagation();
    setOpen(true);
    dispatch(setEdititem("Edit"));
  };

  useEffect(() => {
    if (todos && todos.length > 0) {
      setRowData(todos);
    }
  }, [todos]);

  return (
    <>
      <div className="ag-theme-quartz " style={{ height: 300 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          ref={tableRef}
          pagination={true}
          paginationAutoPageSize={false}
          paginationPageSize={3}
          gridOptions={gridOptions}
        />
      </div>
      <CustomizedDialogs open={open} setOpen={setOpen} updateData={updateData}/>
    </>
  );
};

export default Todos;
