import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: "#0afeff",
  },
  list: {
    display: "flex",
    alignItems: "flex-start",
    width: "fit-content",
  },
}));

const FormSection = () => {
  const styles = useStyles();

  return (
    <Container
      disableGutters
      maxWidth="false"
      className={styles.wrapper}
      sx={{ padding: { sm: "40px 0 50px", xs: "20px 10px 20px" } }}
    >
      <Container disableGutters maxWidth="md" className={styles.container}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} sm={6} className={styles.root}>
            <Typography
              variant="h2"
              gutterBottom="true"
              className={styles.title}
            >
              Be the first
            </Typography>
            <Typography paragraph="true" className={styles.subtitle}>
              Become a founding member and get access before everyone else.
              We'll let you know when it's your time.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              paddingLeft: { sm: "32px", xs: 0 },
              textAlign: { sm: "left", xs: "center" },
            }}
            mt={2}
          >
            <form>
              <FormControl fullWidth="true" margin="normal">
                <TextField
                  id="standard-basic"
                  label="Name"
                  variant="standard"
                />
              </FormControl>
              <FormControl fullWidth="true" margin="normal">
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                />
              </FormControl>
              <FormControl fullWidth="true" margin="normal">
                <TextField
                  id="standard-basic"
                  label="Mobile"
                  variant="standard"
                />
              </FormControl>
              <Box mt={3}>
                <Button variant="contained" color="primary">
                  Get early access
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default FormSection;
