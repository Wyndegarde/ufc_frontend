import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { EventTableHeader, Bout, EventTableFooter } from ".";

const EventTable = ({ bouts }: any) => {
  // console.log(bouts);
  return (
    <div style={{ height: "600px", overflow: "auto" }}>
      <Table
        sx={{ width: "100%", tableLayout: "fixed" }}
        aria-label="simple table"
      >
        <EventTableHeader />
        <TableBody>
          {bouts.map((bout: any) => (
            <Bout key={Math.floor(Math.random() * 10000)} bout={bout} />
          ))}
        </TableBody>
        <EventTableFooter />
      </Table>
    </div>
  );
};

export default EventTable;
