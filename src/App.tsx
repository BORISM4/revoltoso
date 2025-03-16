import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { Navbar } from "./components"; // Importamos el LazyNavbar desde el index.ts

// Usamos React.lazy para cargar las páginas de manera perezosa

import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<CircularProgress color="inherit" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
