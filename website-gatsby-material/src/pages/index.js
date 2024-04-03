import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HeaderSection from "../components/HeaderSection";
import HeroSection from "../components/HeroSection";
import ArticleSection from "../components/ArticleSection";
import SocialSection from "../components/SocialSection";
import FooterSection from "../components/FooterSection";
import FormSection from "../components/FormSection";
import "./index.css";

const darkTheme = createTheme({
  shadows: {
    0: "none",
  },
  shape: {
    borderRadius: "0",
  },
  palette: {
    type: "dark",
    primary: {
      main: "#000",
      primary: "#76fbfd",
    },
  },
  typography: {
    fontFamily: "NeuzeitGro",
    fontSize: "1rem",
    h1: {
      fontFamily: "NeuzeitGro800",
      fontSize: "3rem",
    },
    h2: {
      fontFamily: "NeuzeitGro700",
    },
    h3: {
      fontFamily: "NeuzeitGro700",
    },
  },
});

const IndexPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <HeaderSection />
      <HeroSection />
      <ArticleSection />
      <SocialSection />
      <FormSection />
      <FooterSection />
    </ThemeProvider>
  );
};

export default IndexPage;
