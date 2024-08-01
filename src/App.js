import logo from "./logo.svg";
import "./App.css";
// import Movie from "./Movie";
import Home from "./Component/Home";
// import Header from "./Component/header";
import AddItem from "./Component/addItem";
import UserContext from "./Component/context";
import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import Header from "./Component/header";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Product from "./Component/productView";
import FinalCart from "./Component/finalCart";
import Payment from "./Component/payment";
import UserDetails from "./Reducer/userdetails";
import { UserAction } from "./userAction";
import Register from "./Component/Register";
import LoginPage from "./Component/Login/LoginPage";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [qtyCount, setQtyCount] = useState(1);
  const [openAddPage, setOpenAddPage] = useState(false);
  // const [userData, setUserData] = useState([]);
  // const [addedData, setAddedData] = useState([]);
  // const location = useLocation();
  // const isLoginPage = location.pathname === "/login";
  const initialState = {
    count: 0,
    userData: [],
    addedItem: [],
    totalPrice: 0,
    isLogin: false,
  };

  const [state, dispatch] = useReducer(UserDetails, initialState);
  const [value, setValue] = useState([
    {
      userName: "prem@mail.com",
      password: "123456",
    },
    {
      userName: "arun@mail.com",
      password: "1234567",
    },
    {
      userName: "prema@mail.com",
      password: "123456",
    },
  ]);
  useEffect(() => {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem("myValue", serializedValue);
  }, [value]);

  const getCall = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");

    console.log("res", res.data);
    dispatch({ type: UserAction.ADD, payload: res.data });
  };

  useEffect(() => {
    getCall();
  }, []);
  console.log("Updated.isLogin", state?.isLogin);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        {state?.isLogin ? "" : <Header />}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/addItem" element={<AddItem />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/finalCart" element={<FinalCart />} />

          <Route
            path="/payment"
            element={<Payment setCartCount={setCartCount} />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
