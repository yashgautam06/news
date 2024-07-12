import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import Find from "./components/Find";
import DropDown from "./components/DropDown";
import "./app.css";

function App() {
  return (
    <>
     <Find/>
     {/* <DropDown/> */}
     <NewsContextProvider>
      <News />
     </NewsContextProvider>
    </>
    
  );
}

export default App;
