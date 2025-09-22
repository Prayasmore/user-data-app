import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import AdminDashboard from "./components/AdminDashboard";
import StudentDashboard from "./components/StudentDashboard";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  if (!currentUser) {
    return <LoginPage onLogin={handleLogin} />;
  }

  if (currentUser.userType === "admin") {
    return (
      <AdminDashboard currentUser={currentUser} onLogout={handleLogout} />
    );
  }

  return <StudentDashboard currentUser={currentUser} onLogout={handleLogout} />;
};

export default App;
