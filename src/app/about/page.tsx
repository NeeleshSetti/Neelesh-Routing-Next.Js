import React from "react";
import { Typography } from "@mui/material";
import Home from "../page";

// Define PageContent component
const PageContent = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "220px" }}>
      <Typography variant="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br /> Ullam eveniet dolorum fuga mollitia eum eos harum. <br />
        Consectetur vitae voluptates earum, nobis, reprehenderit
        <br /> debitis officia deleniti neque magnam beatae, similique dolores?
      </Typography>
    </div>
  );
};

function page() {
  return (
    <div>
      <Home />
      <PageContent />
    </div>
  );
}

export default page;
