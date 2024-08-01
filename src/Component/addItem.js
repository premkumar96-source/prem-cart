import { useContext, useState } from "react";
import UserContext from "./context";
import Header from "./header";
import { useNavigate } from "react-router-dom";
import { UserAction } from "../userAction";

function AddItem() {
  const history = useNavigate();

  const { state, dispatch } = useContext(UserContext);
  //   const [data, setData] = useState([]);
  const [data, setData] = useState({
    title: "",
    category: "",
    price: 0,
    description: "",
    image: "",
  });
  //
  //   let itemIdCounter = userData1.length;
  //   let addNewItem = {
  //     title: "",
  //     category: "",
  //     price: "",
  //     description: "",
  //     image: "",
  //   };
  const addItemHandler = (e) => {
    const { name, value } = e.target;
    var float = 0;
    float = parseInt(value);
    if (typeof float === "number") {
      console.log("Value is a number.");
    } else {
      console.log("Value is not a number.");
    }

    setData((prevData) => ({ ...prevData, [name]: float ? float : value }));
    // var obj1 = { ...data, id: userData1.length + 1 };
  };

  const addProductHandler = (e) => {
    e.preventDefault();
    var obj1 = { ...data, id: state.userData.length + 1 };
    // const newItem = { ...data, id: userData1.length + 1 };
    // setUserData1(prevData => [...prevData, newItem]);
    // const newItemWithId = { id: itemIdCounter++, ...data }; // Assign a unique ID using the counter
    // userData1.push(obj1);
    console.log("obj1", obj1);

    dispatch({ type: UserAction.ADDPRODUCT, payload: obj1 });
    setData({
      // Resetting data to clear the form
      title: "",
      category: "",
      price: 0,
      description: "",
      image: "",
    });
    history("/");
    // userData1.push(data);
  };
  return (
    <>
      {/* <Header /> */}

      <div style={{ marginTop: "7%" }}>
        <div className="container" style={{ width: "50%" }}>
          <div className="row">
            <div className="col-12 add-container">
              <div className="text-container">Add product</div>
              <label>Enter title</label>
              <div>
                <input
                  type="text"
                  className="titlefield"
                  name="title"
                  onChange={(e) => addItemHandler(e)}
                />
              </div>
              <label>Enter price</label>
              <div>
                <input
                  type="number"
                  className="titlefield"
                  name="price"
                  value={data.price}
                  onChange={(e) => addItemHandler(e)}
                />
              </div>
              <label>Enter category</label>
              <div>
                {/* <input type="text" className="titlefield" /> */}
                <select
                  id="categoryItem"
                  className="categoryItem"
                  name="category"
                  onChange={(e) => addItemHandler(e)}
                >
                  <option value="select Category">select Category</option>
                  <option value="Electonics">Electonics</option>
                  <option value="Jewelery">Jewelery</option>
                  <option value="men's clothing">men's clothing</option>
                  <option value="woman's clothing">woman's clothing</option>
                </select>
              </div>
              <label>Enter description</label>
              <div>
                <textarea
                  name="description"
                  onChange={(e) => addItemHandler(e)}
                  className="titlefield"
                  id="w3review"
                  rows="4"
                  cols="50"
                ></textarea>
              </div>
              <label>Enter image</label>
              <div>
                <input
                  type="url"
                  className="titlefield"
                  name="image"
                  onChange={(e) => addItemHandler(e)}
                />
              </div>
              <div className="addbtn-container">
                <button className="add-btn" onClick={addProductHandler}>
                  Add product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddItem;
