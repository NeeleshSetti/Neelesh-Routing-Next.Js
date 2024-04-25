import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";
import { lightGreen } from "@mui/material/colors";

export default function Home() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Button color="inherit">
              <Link href="/home">home</Link>
            </Button>
            <Button color="inherit">
              <Link href="/about">about</Link>
            </Button>
            <Button color="inherit">
              <Link href="/skills">skills</Link>
            </Button>
            <Button color="inherit">
              <Link href="/contact">contact</Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
