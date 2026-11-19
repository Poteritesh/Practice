import { useState, useContext, useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashbord";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState("");
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const HandelLogin = (email, password) => {
    if (email === "admin@gmail.com" && password === "123") {
      setUser("Admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "Admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => e.email === email && e.password === password,
      );
      if (employee) {
        setUser("employees");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employees", data: employee }),
        );
      }
    } else {
      alert("Invalid creadentials");
    }
  };

  return (
    <>
      {!user ? <Login handelLogin={HandelLogin} /> : ""}
      {user === "Admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user == "employees" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
