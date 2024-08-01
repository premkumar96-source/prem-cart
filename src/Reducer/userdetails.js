import { UserAction } from "../userAction";

const UserDetails = (state = {}, action) => {
  const { type, payload } = action;
  let Updated = { ...state };
  console.log("UserDetails", payload);
  switch (type) {
    case UserAction.DELETE: {
      const index = Updated.addedItem.findIndex((el) => el.id == payload);
      const removeCount = Updated.addedItem[index].count;
      const removeTotalCount = Updated.addedItem[index].price * removeCount;
      Updated.count = Updated.count - removeCount;
      const roundPriceVal = Updated.totalPrice - removeTotalCount;
      Updated.totalPrice = Math.round(roundPriceVal);
      Updated.addedItem.splice(index, 1);

      break;
    }

    case UserAction.ADD: {
      Updated.userData = payload;

      break;
    }

    case UserAction.COUNT: {
      Updated.count = payload;

      break;
    }
    case UserAction.ADDPRODUCT: {
      Updated.userData.push(payload);
      break;
    }

    case UserAction.ADDEDITEM: {
      Updated.count += 1;
      const index = Updated.userData.findIndex((ele) => ele.id == payload.id);
      const addedDataNew = { ...Updated.userData[index] };
      console.log("addedDataNew", addedDataNew);

      const index1 = Updated.addedItem.findIndex((ele) => ele.id == payload.id);
      if (index1 !== -1) {
        Updated.addedItem[index1].count = Updated.addedItem[index1].count + 1;
      } else {
        addedDataNew.count = 1;
        Updated.addedItem.push(addedDataNew);

        // setAddedData(addedData);
      }

      console.log("reducer", Updated.addedItem);

      break;
    }

    case UserAction.TOTALPRICE: {
      let priceValue = 0;
      Updated.addedItem.forEach((el) => {
        priceValue += el.price * el.count;
      });
      let roundValue = Math.round(priceValue);
      Updated.totalPrice = roundValue;

      break;
    }
    case UserAction.INCREMENT: {
      Updated.count += 1;
      const index = Updated.addedItem.findIndex((el) => el.id == payload);
      Updated.addedItem[index].count = Updated.addedItem[index].count + 1;
      Updated.totalPrice = Updated.totalPrice + Updated.addedItem[index].price;

      // console.log("incrementProduct", incrementProduct);

      // console.log("incrementProduct", incrementProduct);
      // let roundValue = Math.round(incrementProduct);
      // Updated.totalPrice = Updated.totalPrice + roundValue;
      break;
    }
    case UserAction.DECREMENT: {
      if (Updated.count) {
        Updated.count += -1;
        const index = Updated.addedItem.findIndex((el) => el.id == payload);
        Updated.addedItem[index].count = Updated.addedItem[index].count - 1;
        Updated.totalPrice =
          Updated.totalPrice - Updated.addedItem[index].price;
      }
      break;
    }
    case UserAction.LOGINPAGE: {
      Updated.isLogin = true;
      break;
    }
    case UserAction.LOGINHOME: {
      Updated.isLogin = false;
      break;
    }
  }
  return Updated;
};
export default UserDetails;
