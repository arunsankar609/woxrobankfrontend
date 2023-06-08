import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./components/Login";
import {
  Route,
  Navigate,
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import SignupPage from "./components/Signup";
import Home from "./components/Home";
import Header from "./components/Home";
import Deposit from "./components/Deposit";
import Statement from "./components/Statement";
import UserHome from "./components/UserHome";
import Transfer from "./components/Transfer";
import Withdraw from "./components/Withdraw";

function App() {
  
  const PrivateRoute = ({ children }) => {
    if (localStorage.getItem("loggedIn") === "true") {
      return children;
    }

    return <Navigate to="/" />;
  };
  const router = createBrowserRouter([
    {
      path: "/signup",
      element: <SignupPage />,
    },
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/home",
      element: 
        <PrivateRoute>
          <Header />
        </PrivateRoute>
      ,
      children: [
        {
          path: "deposit",
          element: <Deposit />,
        },
        {
          path: "/home",
          element: <UserHome />,
        },
        {
          path: "statement",
          element: <Statement />,
        },
        {
          path: "transfer",
          element: <Transfer />,
        },
        {
          path: "withdraw",
          element: <Withdraw />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
