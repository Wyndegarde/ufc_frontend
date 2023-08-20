import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">
          <h2>Red Fighter</h2>
        </TableCell>
        <TableCell align="center">
          <h2>Blue Fighter</h2>
        </TableCell>
        <TableCell align="center">
          <h2>Predictions </h2>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
// box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
