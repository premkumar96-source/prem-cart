import { useContext, useState } from "react";
import { FixedSizeList as List } from "react-window";
import UserContext from "./context";
import { UserAction } from "../userAction";
import { useNavigate } from "react-router-dom";
import CarouselBanner from "./payment";

function Home() {
  const { state, dispatch } = useContext(UserContext);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(4);
  const history = useNavigate();

  const showCartHandlers = (item, e) => {
    e.stopPropagation();
    setCount((prev) => prev + 1);
    dispatch({ type: UserAction.ADDEDITEM, payload: item });
  };

  const productView = (id) => {
    history(`/product/${id}`);
  };

  // Assuming state.userData is your entire dataset

  // const Row = ({ index, style }) => {
  //   const item = allData[index];
  //   return (
  //     <div className="card" onClick={() => productView(item.id)}>
  //       <img className="imagetag" src={item.image} height="100%" width="100%" />
  //       <div>{item.title}</div>
  //       <div>{item.category}</div>
  //       <div>{item.price}</div>
  //       <div>
  //         <svg
  //           onClick={(e) => showCartHandlers(item, e)}
  //           stroke="currentColor"
  //           fill="currentColor"
  //           strokeWidth="0"
  //           viewBox="0 0 24 24"
  //           focusable="false"
  //           className="chakra-icon css-6ey7w3 addcart"
  //           height="1em"
  //           width="1em"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <path fill="none" d="M0 0h24v24H0z"></path>
  //           <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
  //         </svg>
  //         <p className="addcart-text">Add to Cart</p>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <>
      <div style={{ marginTop: "5%" }}>
        <CarouselBanner />
      </div>
      <div className="container" style={{ marginTop: "2%" }}>
        <div className="row row-cols-4">
          {state.userData.map((item, index) => (
            <div className="col">
              <div className="card" onClick={() => productView(item.id)}>
                <img
                  className="imagetag"
                  src={item.image}
                  height="100%"
                  width="100%"
                />
                <div>{item.title}</div>
                <div>{item.category}</div>
                <div>{item.price}</div>
                <div>
                  <svg
                    onClick={(e) => showCartHandlers(item, e)}
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="chakra-icon css-6ey7w3 addcart"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
                  </svg>
                  <p className="addcart-text">Add to Cart</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
