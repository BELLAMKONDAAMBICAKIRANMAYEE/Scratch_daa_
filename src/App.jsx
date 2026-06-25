import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Topics from "./pages/Topics";
import TopicDetail from "./pages/TopicDetails";
import QuizPage from "./pages/QuizPage";
import SubtopicDetail from "./pages/SubtopicDetails";
import Coding from "./pages/Coding";
import CodingTopics from "./pages/CodingTopics";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

function Layout() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const isAuthPage =
    location.pathname.startsWith("/login") ||
    location.pathname.startsWith("/signup");

  return (
    <div className="app-layout">

      {/* Overlay only on mobile when sidebar is open */}
      {!isAuthPage && isOpen && (
        <div
          className="overlay"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      {!isAuthPage && (
        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}

      {/* Main Area */}
      <div
        className={`main-area ${
          isAuthPage
            ? ""
            : isOpen
            ? "sidebar-open"
            : "sidebar-closed"
        }`}
      >
        {/* Navbar */}
        {!isAuthPage && (
          <Navbar
            toggleSidebar={() => setIsOpen(!isOpen)}
          />
        )}

        {/* Page Content */}
        <div className="content">
          <Routes>

            {/* Redirect */}
            <Route path="/" element={<Navigate to="/signup" />} />

            {/* Auth Pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Protected Routes */}
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route
              path="/topics"
              element={
                <ProtectedRoute>
                  <Topics />
                </ProtectedRoute>
              }
            />

            <Route
              path="/topic/:id"
              element={
                <ProtectedRoute>
                  <TopicDetail />
                </ProtectedRoute>
              }
            />

            <Route
              path="/topic/:subId"
              element={
                <ProtectedRoute>
                  <SubtopicDetail />
                </ProtectedRoute>
              }
            />

            <Route
              path="/quiz/:id"
              element={
                <ProtectedRoute>
                  <QuizPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/coding"
              element={
                <ProtectedRoute>
                  <CodingTopics />
                </ProtectedRoute>
              }
            />

            <Route
              path="/coding/:id"
              element={
                <ProtectedRoute>
                  <Coding />
                </ProtectedRoute>
              }
            />

          </Routes>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}