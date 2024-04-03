import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { StaticImage } from "gatsby-plugin-image";

const useStyles = makeStyles((theme) => ({
  root: {
    "&.MuiButton-contained": {
      textTransform: "none",
      fontFamily: "NeuzeitGro700",
    },
  },
  wrapper: {
    backgroundColor: "#fff",
  },
}));

const HeroSection = () => {
  const styles = useStyles();

  return (
    <Container
      disableGutters
      maxWidth="false"
      className={styles.wrapper}
      sx={{ padding: { xs: "0 10px" }, marginTop: "64px" }}
    >
      <Container disableGutters maxWidth="md" className={styles.container}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} sm={6} className={styles.root}>
            <StaticImage src="../images/about.png" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ paddingLeft: { sm: "32px", xs: 0 } }}
            mt={2}
          >
            <Typography
              variant="h2"
              gutterBottom="true"
              className={styles.title}
            >
              A different kind <br />
              of bank
            </Typography>
            <Typography paragraph="true" className={styles.subtitle}>
              We exist because you deserve more. Why accept anything else. You
              are building the future and you need a bank that can take you
              there.
            </Typography>

            <Button variant="contained" className={styles.root}>
              Get early access
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default HeroSection;
