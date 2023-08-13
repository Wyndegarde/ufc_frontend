import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

interface Bout {
  id: number;
  redFighter: string;
  blueFighter: string;
  redRecord: string;
  blueRecord: string;
}
const bouts: Bout[] = [
  {
    id: 1,
    redFighter: "Thiago Santos",
    blueFighter: "Johnny Walker",
    redRecord: "21-9-0",
    blueRecord: "18-5-0",
  },
  {
    id: 2,
    redFighter: "Rafael Dos Anjos",
    blueFighter: "Islam Makhachev",
    redRecord: "30-13-0",
    blueRecord: "20-1-0",
  },
];
const EventCard = () => {
  return (
    <>
      <h2
        style={{
          color: "red",
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        UFC Fight Night: Santos vs. Walker
      </h2>
      {/* <Box
        component="form"
        sx={{
          bgcolor: "primary.main",
          marginTop: "1rem",
          display: "flex",
          alignItems: "center",
          height: "80vh",
          width: "40vw",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      > */}
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Red Fighter</TableCell>
              <TableCell align="center">Blue Fighter</TableCell>
              <TableCell align="center">Red Record</TableCell>
              <TableCell align="center">Blue Record</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bouts.map((bout) => (
              <TableRow key={bout.id}>
                <TableCell align="center">{bout.redFighter}</TableCell>
                <TableCell align="center">{bout.blueFighter}</TableCell>
                <TableCell align="center">{bout.redRecord}</TableCell>
                <TableCell align="center">{bout.blueRecord}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
       
      {/* </Box> */}
      <Button
          variant="contained"
          sx={{ marginLeft: "auto", marginRight: "auto" }}
        >
          View Event
        </Button>
    </>
  );
};

export default EventCard;
