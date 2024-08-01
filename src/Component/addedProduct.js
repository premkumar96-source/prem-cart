import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./context";

function AddedProduct() {
  const history = useNavigate();
  const { state, dispatch } = useContext(UserContext);
  // const [showItem, setShowItem] = useState(false);
  const goToFinalCart = () => {
    history("/finalCart");
  };
  // console.log("state.addedItem", state.addedItem);
  return (
    <>
      {state.addedItem.map((item) => (
        <div key={item.div} className="addedcart-container">
          <img className="addedimagetag" src={item.image} />
          <div>{item.title}</div>
        </div>
      ))}
      <button className="addtocart" onClick={goToFinalCart}>
        Add to Cart
      </button>
      {/* {Object.entries(addedData).map(([key, value]) => (
          <div key={key}>
            <div>{key}</div>
          </div>
        ))} */}
    </>
  );
}
export default AddedProduct;
