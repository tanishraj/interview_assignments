import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { makeStyles } from "@mui/styles";
import { StaticImage } from "gatsby-plugin-image";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: "#000",
    color: "#fff",
  },
  list: {
    display: "flex",
    alignItems: "flex-start",
    width: "fit-content",
  },
  links: {
    color: "#fff",
  },
}));

const FooterSection = () => {
  const styles = useStyles();

  return (
    <Container
      disableGutters
      maxWidth="false"
      className={styles.wrapper}
      sx={{ padding: { sm: "40px 0 40px", xs: "30px 10px 30px" } }}
    >
      <Container disableGutters maxWidth="md" className={styles.container}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} className={styles.root}>
            <Box sx={{ display: "table", margin: { sm: "0 auto", xs: "0" } }}>
              <List disablePadding>
                <ListItem
                  component="a"
                  href="#"
                  disablePadding
                  sx={{
                    marginRight: { sm: "32px", xs: "0" },
                    display: { sm: "inline-block", xs: "block" },
                    width: "auto",
                  }}
                >
                  <ListItemText className={styles.links}>
                    Get support
                  </ListItemText>
                </ListItem>
                <ListItem
                  component="a"
                  href="#"
                  disablePadding
                  sx={{
                    marginRight: { sm: "32px", xs: "0" },
                    display: { sm: "inline-block", xs: "block" },
                    width: "auto",
                  }}
                >
                  <ListItemText className={styles.links}>Pricing</ListItemText>
                </ListItem>
                <ListItem
                  component="a"
                  href="#"
                  disablePadding
                  sx={{
                    marginRight: { sm: "32px", xs: "0" },
                    display: { sm: "inline-block", xs: "block" },
                    width: "auto",
                  }}
                >
                  <ListItemText className={styles.links}>
                    Terms & Conditions
                  </ListItemText>
                </ListItem>
                <ListItem
                  component="a"
                  href="#"
                  disablePadding
                  sx={{
                    display: { sm: "inline-block", xs: "block" },
                    width: "auto",
                  }}
                >
                  <ListItemText className={styles.links}>
                    Privacy Policy
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              paddingLeft: { sm: "32px", xs: 0 },
              textAlign: { xs: "center" },
            }}
            mt={3}
          >
            <List
              disablePadding
              className={styles.list}
              sx={{ margin: { xs: "0 auto" } }}
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
          <Grid
            item
            xs={12}
            sx={{
              paddingLeft: { sm: "32px", xs: 0 },
              textAlign: { xs: "center" },
            }}
            mt={3}
          >
            <Typography paragraph="true" className={styles.subtitle}>
              2021 © All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default FooterSection;
