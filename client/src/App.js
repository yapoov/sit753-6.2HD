// import logo from "./logo.svg";
import "./App.css";
import "./output.css";
import { SetupNotification } from "./notification";
import Login from "./pages/login";
import Signup from "./pages/signup";
import {
  BrowserRouter,
  createBrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home";

import { Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
