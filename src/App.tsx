import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import TopPage from "./pages/TopPage";
import UserDetail from "./pages/UserDetail";
import UserList from "./pages/UserList";
import UserRepositoryImpl from "./repositories/UserRepositoryImpl";
import UserService from "./services/UserService";

const App: React.FC = () => {
  const userRepository = new UserRepositoryImpl();
  const userService = new UserService(userRepository);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/users" element={<UserList userService={userService} />} />
        <Route
          path="/users/:id"
          element={<UserDetail userService={userService} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
