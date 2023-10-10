import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const Bout = ({ bout }: any) => {
  return (
    <TableRow key={bout.id}>
      <TableCell align="center">
        <div>
          <h3>{bout.red_fighter}</h3>
          <p>{bout.red_record}</p>
        </div>
      </TableCell>
      <TableCell align="center">
        <div>
          <h3>{bout.blue_fighter}</h3>
          <p>{bout.blue_record}</p>
        </div>
      </TableCell>
      <TableCell align="center"></TableCell>
    </TableRow>
  );
};

export default Bout;
