import React from 'react'
import TableFooter from "@mui/material/TableFooter";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";

const EventTableFooter = () => {
  return (
      <TableFooter>
    <TableRow >
        <TableCell align="center" >
            </TableCell>
        <TableCell align="center" >

      <Button
        component="div"
        variant="contained"
        sx={{ float: "right"}}
        >
        View Event
      </Button>
        </TableCell>
        <TableCell align="center">

      <Button
        component="div"
        variant="contained"
        >
        Predict Outcomes
      </Button>
        </TableCell>
          </TableRow>
    </TableFooter>

  )
}

export default EventTableFooter
