import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Message from "./Message";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/message' element={<Message />} />
    </Routes>
  );
}
export default App;
