import logo from "./logo.svg";
import "./App.css";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector(selectUser);

  return (
    <>
      {/* <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup />}></Route>
            <Route path="/Logout" element={ <Logout />}></Route>

          </Routes>
        </BrowserRouter>
      </div> */}
      <div className="App">{user ? <Logout /> : <Signup />}</div>
    </>
  );
};

export default App;
