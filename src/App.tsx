import React, { useEffect, useState } from "react";
import "./App.css";
import { claim } from "./auth/auth.model";
import AuntenticationContext from "./auth/autenticationContext";
import HomePage from "./pages/homePage/homePage";
import NotFound from "./routes/notFound";
import HomePageLogin from "./pages/homePage/homePageLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [claims, setClaims] = useState<claim[]>([]);
  const [names, setNames] = useState<string | null>('');
  function actualizarClaims(claims: claim[], names: string) {
    setClaims(claims);
    setNames(names);
  }
  // Obteneer claims cada vez que carguemos la pagina.
  useEffect(() => {
  }, []);
  return (
    <div>
      <BrowserRouter>
        <AuntenticationContext.Provider value={{ claims, actualizarClaims: actualizarClaims, names }}>
          <Routes>
            <Route
              path={"/"}
              element={
                <HomePage />
              }
            />
            <Route
              path={"/homepage/login"}
              element={
                <HomePageLogin />
              }
            />
            <Route
              path={"*"}
              element={
                <NotFound />
              }
            />
          </Routes>
        </AuntenticationContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
