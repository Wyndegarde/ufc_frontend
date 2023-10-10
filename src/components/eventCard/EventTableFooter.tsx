import React from "react";
import TableFooter from "@mui/material/TableFooter";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";

const EventTableFooter = () => {
  return (
    <TableFooter>
      <TableRow>
        <TableCell align="center"></TableCell>
        <TableCell align="center"> </TableCell>
        <TableCell align="right">
          <Button component="div" variant="contained">
            View Event
          </Button>
          <Button
            component="div"
            variant="contained"
            sx={{ marginLeft: "5px" }}
          >
            Predict Outcomes
          </Button>
        </TableCell>
      </TableRow>
    </TableFooter>
  );
};

export default EventTableFooter;
