import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const TableHeader = () => {
  return (
      <TableHead>
              <TableRow>
                <TableCell align="center">Red Fighter</TableCell>
                <TableCell align="center">Blue Fighter</TableCell>
                <TableCell align="center">Predicted Outcome</TableCell>
              </TableRow>
            </TableHead>

  )
}

export default TableHeader
// box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;