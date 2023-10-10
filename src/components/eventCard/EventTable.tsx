import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { EventTableHeader, Bout, EventTableFooter } from ".";
import { Tab } from "@mui/material";

const EventTable = ({ bouts }: any) => {
  // console.log(bouts);
  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <div>
        <Table>
          <EventTableHeader />
        </Table>
      </div>
      <div style={{ height: "600px", overflow: "auto" }}>
        <Table
          sx={{ width: "100%", tableLayout: "fixed" }}
          aria-label="simple table"
        >
          <TableBody>
            {bouts.map((bout: any) => (
              <Bout key={Math.floor(Math.random() * 10000)} bout={bout} />
            ))}
          </TableBody>
        </Table>
      </div>
      <Table>
        <EventTableFooter />
      </Table>
    </div>
  );
};

export default EventTable;
