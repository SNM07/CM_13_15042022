import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/HomePage";
import Profile from "./pages/UserPage";
import Login from "./pages/SignIn";
import ErrorPage from "./pages/ErrorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router";
import {
  isAuthenticate,
  verifyConnection,
} from "./storage/connection";

import "./App.css";

verifyConnection();

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            isAuthenticate === true ? <Navigate to="/profile" /> : <Login />
          }
        ></Route>
        <Route
          path="/profile"
          element={
            isAuthenticate === false ? <Navigate to="/login" /> : <Profile />
          }
        ></Route>
        <Route element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
