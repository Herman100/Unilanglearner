import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./Layout";
import Home from "./components/Home/Home";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import Logout from "./components/Authentication/Logout";
import ForgotPassword from "./components/Authentication/ForgotPassword";
import AuthContextProvider from "./contexts/AuthContextProvider";
import Create from "./components/Flashcards/Create";
import Review from "./components/Flashcards/Review";
import Error from "./components/Error/Error";
import FlashcardSets from "./components/Flashcards/FlashcardSets";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index path="login" element={<Login />} />
      <Route index path="signup" element={<SignUp />} />
      <Route index path="logout" element={<Logout />} />
      <Route index path="reset" element={<ForgotPassword />} />
      <Route path="/" element={<Layout />}>
        <Route index path="" element={<Home />} />
        <Route index path="create" element={<Create />} />
        <Route index path="cardsets" element={<FlashcardSets />} />
        <Route index path="sets/:setId" element={<Review />} />
      </Route>
      <Route path="*" element={<Error />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AuthContextProvider>
    <RouterProvider router={router} />
  </AuthContextProvider>
  // </React.StrictMode>
);
