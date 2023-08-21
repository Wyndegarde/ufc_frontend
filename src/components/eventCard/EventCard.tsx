import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import { BoutObj } from "../../types";
import { EventTable, EventTitle } from ".";

const bouts: BoutObj[] = [
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
      <EventTitle />
      <Box component="form" className="event-table">
        <EventTable bouts={bouts} />
      </Box>
    </>
  );
};

export default EventCard;
