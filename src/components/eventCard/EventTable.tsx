import Table from "@mui/material/Table";
import TableFooter  from "@mui/material/TableFooter";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import { TableHeader, Bout } from ".";

const EventTable = ({ bouts }: any) => {
  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHeader />
      <TableBody>
        {bouts.map((bout: any) => (
          <Bout bout={bout} />
        ))}
      </TableBody>
            {/* Fix this  */}
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
    </Table>
  );
};

export default EventTable;
