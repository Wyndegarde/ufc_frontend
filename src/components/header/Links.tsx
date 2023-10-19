import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const pages = ["Statistics", "Events", "Models"];
const Links = ({ onCloseNavMenu }: any) => {
  const redirect = (page: string) => {
    window.location.href = `/${page.toLowerCase()}`;
  };
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => redirect(page)}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
};

export default Links;
