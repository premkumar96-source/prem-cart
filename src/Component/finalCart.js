import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Payment from "./payment";
import UserContext from "./context";
import { UserAction } from "../userAction";
import "../App.css";

function FinalCart({ addedData, deletedCount }) {
  const [showData, setShowData] = useState([]);
  const [deleteCount, setDeleteCount] = useState(0);
  const [priceVal, setPriceVal] = useState(0);
  const [priceValShow, setPriceValShow] = useState(false);
  const history = useNavigate();
  const { state, dispatch } = useContext(UserContext);
  console.log("state.totalPrice", state.totalPrice);

  const deleteHandler = (id) => {
    console.log("id", id);
    dispatch({ type: UserAction.DELETE, payload: id });
    // const deltedData = showData.filter((ele) => ele.id !== id);
    // setShowData(deltedData);
    // setDeleteCount((prev) => prev + 1);
    // deletedCount(id);
    // const index = showData.findIndex((el) => el.id == id);

    // const delteItem = addedData[index];
    // const deletequantity = delteItem.price * delteItem.count;
    // const finalPrice = priceVal - deletequantity;
    // let roundValue = Math.round(finalPrice);
    // setPriceVal(roundValue);
  };
  const setDataCall = () => {
    //   setShowData(addedData);
    //   console.log("addedData123aaaaaaaaa", addedData);
    dispatch({ type: UserAction.TOTALPRICE });
    // let priceValue = 0;
    // state.addedItem.forEach((el) => {
    //   priceValue += el.price * state.count;
    //   let roundValue = Math.round(priceValue);

    //   setPriceVal(roundValue);
    //   console.log("priceValue", roundValue);
    // });
  };

  useEffect(() => {
    setDataCall();
  }, []);

  const paymentPage = () => {
    // history("/payment");
    setPriceValShow(true);
  };
  const increment = (id) => {
    dispatch({ type: UserAction.INCREMENT, payload: id });
  };
  const decrement = (id) => {
    dispatch({ type: UserAction.DECREMENT, payload: id });
  };
  return (
    <div style={{ marginTop: "7%" }} class="container">
      {/* {priceValShow ? (
        <Payment priceVal={priceVal} addedData={addedData} />
      ) : ( */}
      <table className="table">
        <tr>
          <td>s.no</td>
          <td>image</td>
          <td>title</td>
          <td>price</td>
          <td>quantity</td>
          <td>action</td>
        </tr>
        <tbody>
          {state.addedItem &&
            state.addedItem.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img className="addedimagetag" src={item.image} />
                  </td>

                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>
                    <div className="itemCount">
                      <button onClick={() => increment(item.id)}>+</button>
                      <div>{item.count}</div>
                      <button onClick={() => decrement(item.id)}>-</button>
                    </div>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteHandler(item.id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}

          <tr>
            <td>Total Price ${state.totalPrice}</td>
            <td>
              <button onClick={paymentPage}>Go to Payment page</button>
            </td>
          </tr>
        </tbody>
      </table>
      {/* )} */}
    </div>
  );
}
export default FinalCart;
