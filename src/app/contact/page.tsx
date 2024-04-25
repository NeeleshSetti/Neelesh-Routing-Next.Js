import React from "react";
import Home from "../page";
import { Typography, TextField, Button, Grid } from "@mui/material";

const PageContent = () => {
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8} md={6}>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

function Page() {
  return (
    <>
      <Home />
      <PageContent />
    </>
  );
}

export default Page;
