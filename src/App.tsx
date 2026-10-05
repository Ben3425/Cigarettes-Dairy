import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/Table.tsx";
import Login from "./routes/Login.tsx";
import Home from "./routes/Home.tsx";
import EditRow from "./routes/Edit.row.tsx";
import Review from "./routes/Review.tsx";
import { ProtectedRoute } from "./components/ProtectedRoute.tsx";
import AuthProvider from "./components/Auth.provider.tsx";
import { Navigation } from "./components/Navigation.tsx";
import Register from "./routes/Register.tsx";
import { NoMatch } from "./components/NoMatch.tsx";

export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <Navigation />

          <Routes>
            <Route index element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/editrow"
              element={
                <ProtectedRoute>
                  <EditRow />
                </ProtectedRoute>
              }
            />
            <Route
              path="/review"
              element={
                <ProtectedRoute>
                  <Review />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </StrictMode>
  );
}
