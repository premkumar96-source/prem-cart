import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserContext from "./context";

function Product() {
  const params = useParams();
  //   const { userData } = useContext(UserContext);
  const [productData, setProductData] = useState([]);
  let vv;
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    const index = state.userData.findIndex((ele) => ele.id == params.id);
    const data = state.userData[index];
    setProductData(data);
    //console.log("productDataq", productData);
  }, [params]);

  const addCartHandler = (id) => {
    // addCartCount(id);
  };

  //   console.log("userDataqqq", state);
  return (
    <div style={{ marginTop: "7%" }}>
      <div className="container fullview-Container">
        <div className="row">
          <div className="col-6 sub-container">
            <div style={{ padding: "10px", maxWidth: "300px" }}>
              <img
                src={productData.image}
                height="100%"
                width="100%"
                alt="image"
              ></img>
            </div>
          </div>
          <div className="col-6" style={{ marginTop: "20px" }}>
            <div>{productData.category}</div>
            <div>${productData.price}</div>

            <h5 style={{ marginTop: "10px", marginBottom: "0px" }}>
              Product info:
            </h5>
            <div>{productData.description}</div>
            <div className="contaniner addcart-container">
              <div className="row">
                <div
                  className="col-12 add-cart"
                  onClick={() => addCartHandler(productData.id)}
                >
                  Add to cart
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
