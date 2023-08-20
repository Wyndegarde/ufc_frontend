import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const Bout = ({ bout }: any) => {
  return (
    <TableRow key={bout.id}>
      <TableCell align="center">
        <div>
          <h3>{bout.redFighter}</h3>
          <p>{bout.redRecord}</p>
        </div>
      </TableCell>
      <TableCell align="center">
        <div>
          <h3>{bout.blueFighter}</h3>
          <p>{bout.blueRecord}</p>
        </div>
      </TableCell>
      <TableCell align="center"></TableCell>
    </TableRow>
  );
};

export default Bout;
