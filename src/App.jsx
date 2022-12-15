import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddContact from "./pages/AddContact";
import ContactDetails from "./pages/ContactDetails";
import ContactList from "./pages/ContactList";
import EditContact from "./pages/EditContact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/addContact" element={<AddContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
          <Route path="/detail/:id" element={<ContactDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
