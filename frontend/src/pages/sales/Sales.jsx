import SearchBar from "../../../components/searchBar/SearchBar";
import "./Sales.css";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import TableRestaurantOutlinedIcon from "@mui/icons-material/TableRestaurantOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useState } from "react";
import {useLocation} from "react-router-dom"
import PaymentSummary from "./paymentSummary/PaymentSummary";
const Sales = () => {
  const location = useLocation();
  const [cartData, setCartData] = useState([
    {
      itemName: "Chicken BBQ pizza with mexican flavoured toppings",
      itemContent: "3 large pan pizzas,fries,burger",
      quantity: 1,
      amount: 300,
    },
    {
      itemName: "Mushroom Salad",
      itemContent: "3 large pan pizzas,fries,burger",
      quantity: 3,
      amount: 300,
    },
    {
      itemName: "Grape Juice",
      itemContent: "",
      quantity: 2,
      amount: 300,
    },
    {
      itemName: "Mushroom Sandwich combo",
      itemContent: "3 large pan pizzas,fries,burger",
      quantity: 1,
      amount: 300,
    },
    {
      itemName: "Cappuccino",
      itemContent: "",
      quantity: 2,
      amount: 300,
    },
  ]);

  const[infoPages,setInfoPages] = useState([
    {
      path:"/sales",
      component:<PaymentSummary/>
    }
  ])

  return (
    <div className="salesContainer">
      <div className="mainContainer">
        <div className="cartOptionsMasterContainer">
          <div className="searchContainer">
            <div className="searchBar">
              <SearchBar placeholder={"Search"} />
            </div>
            <div className="bookIconContainer">
              <MenuBookOutlinedIcon />
            </div>
          </div>
          <div className="CartSummaryInfoContainer">
            <div className="cartInfo">
              <p className="cartSummaryTitle">Cart Summary</p>
              <div className="orderIdContainer">
                <p className="orderIdLabel">Order ID: </p>
                <p className="orderIdValue">00001</p>
              </div>
            </div>
            <div className="cartIconsContainer">
              <div>
                <Person2OutlinedIcon />
              </div>
              <div>
                <TableRestaurantOutlinedIcon />
              </div>
              <div>
                <MoreVertOutlinedIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="cardInfoTableContainer">
          <table className="cartInfoTable">
            <thead className="cartInfoHeadings">
              <th className="itemHeading">Item</th>
              <th>Qty</th>
              <th>Amount(SAR)</th>
            </thead>
            <tbody className="cartInfoTableBody">
              {cartData.map((data) => (
                <tr>
                  <td className="itemData">
                    <div>
                      <div className="itemName">{data.itemName}</div>
                      <div>{data.itemContent}</div>
                      </div>
                  </td>
                  <td>
                    <div>{data.quantity}</div>
                  </td>
                  <td>
                    <div>{data.amount}</div>
                  </td>
                  <td>
                    <div className="itemDeleteIcon"><DeleteOutlinedIcon/></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="infoContainer">
        {
          infoPages.find((data)=>(
            location.pathname===data.path 
          ))?.component
        }
      </div>
    </div>
  );
};

export default Sales;
