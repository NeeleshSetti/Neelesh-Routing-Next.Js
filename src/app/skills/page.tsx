import React from "react";
import Home from "../page";
import { Typography } from "@mui/material";

const PageContent = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "220px" }}>
      <Typography variant="h4">1) HTML , CSS</Typography>
      <Typography variant="h4">2) Javascript</Typography>
      <Typography variant="h4">3) React</Typography>
      <Typography variant="h4">4) Redux</Typography>
      <Typography variant="h4">5) Next.Js</Typography>
    </div>
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
