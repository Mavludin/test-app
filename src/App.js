import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Routes } from "./components/Routes/Routes";

export const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes />
        </main>
        <Footer />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </BrowserRouter>
  );
};
