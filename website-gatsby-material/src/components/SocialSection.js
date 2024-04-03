import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { makeStyles } from "@mui/styles";
import { StaticImage } from "gatsby-plugin-image";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: "#f1f1f1",
  },
  list: {
    display: "flex",
    alignItems: "flex-start",
    width: "fit-content",
  },
}));

const SocialSection = () => {
  const styles = useStyles();

  return (
    <Container
      disableGutters
      maxWidth="false"
      className={styles.wrapper}
      sx={{ padding: { xs: "0 10px 40px", sm: "0" } }}
    >
      <Container disableGutters maxWidth="md" className={styles.container}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} sm={6} className={styles.root}>
            <StaticImage src="../images/card.svg" />
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
            <Typography
              variant="h2"
              gutterBottom="true"
              className={styles.title}
            >
              Join us on socials
            </Typography>
            <Typography paragraph="true" className={styles.subtitle}>
              Follow us on Twitter, Facebook and Instagram to see what we're up
              to.
            </Typography>

            <List
              disablePadding
              className={styles.list}
              sx={{ margin: { sm: "0", xs: "0 auto" } }}
            >
              <ListItem
                component="a"
                href="#"
                disablePadding
                sx={{ marginRight: "8px" }}
              >
                <StaticImage src="../images/social_facebook.svg" />
              </ListItem>
              <ListItem
                component="a"
                href="#"
                disablePadding
                sx={{ marginRight: "8px" }}
              >
                <StaticImage src="../images/social_twitter.svg" />
              </ListItem>
              <ListItem
                component="a"
                href="#"
                disablePadding
                sx={{ marginRight: "8px" }}
              >
                <StaticImage src="../images/social_instagram.svg" />
              </ListItem>
              <ListItem component="a" href="#" disablePadding>
                <StaticImage src="../images/social_linkedin.svg" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default SocialSection;
