import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Form from "./components/Form";
import EditForm from "./components/EditForm";
import UserDetails from "./components/UserDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/edit/:id" element={<EditForm />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;