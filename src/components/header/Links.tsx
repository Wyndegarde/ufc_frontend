import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


const pages = ["Statistics", "Prior Events", "Model"];
const Links = ({onCloseNavMenu}:any) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
    {pages.map((page) => (
      <Button
        key={page}
        onClick={onCloseNavMenu}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        {page}
      </Button>
    ))}
  </Box>
  )
}

export default Links
