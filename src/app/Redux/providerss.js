"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

const Providerss = ({ children }) => {
  return (
    <div>
      <Provider store={store}>{children}</Provider>
    </div>
  );
};

export default Providerss;
