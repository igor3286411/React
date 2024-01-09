import { useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Layout } from "./componets/Layout";
import { Home } from "./componets/Home";
import { NotFound } from "./componets/NotFound";
import { Users } from "./componets/Users";
import { Contact } from "./componets/Contact";
import { InfoUser } from "./componets/InfoUser";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<InfoUser />} />
            <Route path="contact" element={<Contact />} />  
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
