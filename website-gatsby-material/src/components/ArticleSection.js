import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: "#fff",
  },
}));

const ArticleSection = () => {
  const styles = useStyles();

  return (
    <Container
      disableGutters
      maxWidth="false"
      className={styles.wrapper}
      sx={{ padding: { xs: "0 10px" } }}
    >
      <Container disableGutters maxWidth="md" sx={{ paddingTop: "30px" }}>
        <Grid container justifyContent="space-between">
          <Grid item xs={12} sm={6}>
            <Typography
              align="center"
              variant="h1"
              sx={{
                maxWidth: { sm: "220px", xs: "100%" },
                margin: { sm: "0 auto", xs: "40px 0" },
              }}
            >
              What we stand for and why..
            </Typography>
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
              Born out of necessity
            </Typography>
            <Typography paragraph="true" className={styles.subtitle}>
              For those tired of being offered the same services by the banking
              industry for years and years. For those needing financial freedom
              and independence. For those who want control, transparency, and to
              really understand their money. For those who want to go further.
              We’re here to help you go after what you want in life. <br />
              <strong>A bank that lets you do you.</strong>
            </Typography>

            <Typography paragraph="true" className={styles.subtitle}>
              For those tired of being offered the same services by the banking
              industry for years and years. For those needing financial freedom
              and independence. For those who want control, transparency, and to
              really understand their money. For those who want to go further.
              We’re here to help you go after what you want in life.
              <br />
              <strong>A bank that lets you do you.</strong>
            </Typography>

            <Typography paragraph="true" className={styles.subtitle}>
              For those tired of being offered the same services by the banking
              industry for years and years. For those needing financial freedom
              and independence. For those who want control, transparency, and to
              really understand their money. For those who want to go further.
              We’re here to help you go after what you want in life. <br />
              <strong>A bank that lets you do you.</strong>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default ArticleSection;
