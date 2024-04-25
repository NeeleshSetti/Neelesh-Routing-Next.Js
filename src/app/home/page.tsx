import React from "react";
import { Typography } from "@mui/material";
import Home from "../page";

const PageContent = () => {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "220px" }}>
        <Typography variant="h1">hey, I'm Neelesh 👋</Typography>
        <p>I'm a frontend developer, optimist, and community builder.</p>
      </div>
    </>
  );
};

function page() {
  return (
    <>
      <Home />
      <PageContent />
    </>
  );
}

export default page;
