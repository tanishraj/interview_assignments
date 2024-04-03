import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { makeStyles } from "@mui/styles";

const navItems = ["What we do", "About us", "Privacy Policy", "Contact us"];

const useStyles = makeStyles((theme) => ({
  divider: {
    backgroundColor: "#183233",
  },

  textLink: {
    display: "inline-flex",
    padding: "6px 16px",
    color: "#000",
  },

  textLinkWhite: {
    display: "inline-flex",
    padding: "6px 16px",
    color: "#fff",
    fontWeight: 700,
  },
}));

function HeaderSection(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles();

  const styles = {
    mobileDrawer: {
      display: { xs: "block", sm: "none" },
      "& .MuiDrawer-paper": {
        boxSizing: "border-box",
        width: "100%",
        color: "#fff",
        backgroundColor: "#000",
      },
    },
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <Button onClick={handleDrawerToggle} sx={{ color: "#fff" }}>
        <CloseSharpIcon sx={{ mx: 2, my: 2, fontSize: 30 }} />
      </Button>
      <Divider className={classes.divider} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ fontSize: 25 }}>
              <ListItemText primary={<Typography>{item}</Typography>} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 30,
    target: props.window ? window() : undefined,
  });

  return (
    <Box>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: trigger ? "#000" : "#fff",
          boxShadow: "none",
        }}
      >
        <Container disableGutters maxWidth="md" className={styles.container}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: { sm: "none", xs: "space-between" },
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                fontSize: 30,
                display: { sm: "none" },
                color: trigger ? "#fff" : "#000",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Button
              variant="contained"
              classes={classes.button}
              sx={{
                backgroundColor: trigger ? "#76fbfd" : "#000",
                color: trigger ? "#000" : "#fff",
                display: { sm: "none" },
              }}
            >
              Get early access
            </Button>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            ></Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Link
                to="#"
                className={trigger ? classes.textLinkWhite : classes.textLink}
              >
                What we do
              </Link>
              <Link
                className={trigger ? classes.textLinkWhite : classes.textLink}
              >
                About us
              </Link>
              <div
                className={trigger ? classes.textLinkWhite : classes.textLink}
              >
                <span>En</span> | <span>Ar</span>
              </div>
              <Button
                variant="contained"
                classes={classes.button}
                sx={{
                  backgroundColor: trigger ? "#76fbfd" : "#000",
                  color: trigger ? "#000" : "#fff",
                }}
              >
                Get early access
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={styles.mobileDrawer}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

HeaderSection.propTypes = {
  window: PropTypes.func,
};

export default HeaderSection;
