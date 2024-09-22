import SearchBar from "../../../components/searchBar/SearchBar";
import "./Sales.css";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import TableRestaurantOutlinedIcon from "@mui/icons-material/TableRestaurantOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PaymentSummary from "./paymentSummary/PaymentSummary";
import Catalog from "./catalog/Catalog";
import Variants from "./catalog/Variants";
import IncrementableSlider from "../../../components/incrementableSlider/IncrementableSlider";
import Button from "../../../components/button/Button";
const Sales = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cartData, setCartData] = useState([]);

  // Log changes to cartData
  useEffect(() => {
    console.log(cartData);
  }, [cartData]);

  // Move infoPages into the component body so it's recreated with the latest cartData
  const infoPages = [
    {
      path: "/sales",
      component: <PaymentSummary cartData={cartData} />,
    },
    {
      path: "/sales/catalog",
      component: <Catalog />,
    },
    {
      path: "/sales/catalog/variant",
      component: <Variants setCartData={setCartData} />,
    },
  ];

  return (
    <div className="salesContainer">
      <div className="mainContainer">
        <div className="cartOptionsMasterContainer">
          <div className="searchContainer">
            <div className="searchBar">
              <SearchBar placeholder={"Search"} />
            </div>
            <div
              onClick={() => {
                navigate("catalog");
              }}
              className={`bookIconContainer${
                location.pathname?.includes("/sales/catalog") ? " active" : ""
              }`}
            >
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
              {cartData?.map((data, i) => (
                <tr key={i}>
                  <td className="itemData">
                    <div>
                      <div className="itemName">{data.product.name}</div>
                      <div>{data.variant.name}</div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <Button
                        borderColor={"gray"}
                        content={
                          <IncrementableSlider
                            value={data.quantity}
                            incrementValue={() => {
                              setCartData((prev) => {
                                const newCardData = [...prev];
                                newCardData[i].quantity += 1;
                                return newCardData;
                              });
                            }}
                            decrementValue={() => {
                              setCartData((prev) => {
                                const newCardData = [...prev];
                                if (newCardData[i].quantity > 1) {
                                  newCardData[i].quantity -= 1;
                                }
                                return newCardData;
                              });
                            }}
                          />
                        }
                      />
                    </div>
                  </td>
                  <td>
                    <div>{(data.amount * data.quantity).toFixed(2)}</div>
                  </td>
                  <td>
                    <div className="itemDeleteIcon">
                      <DeleteOutlinedIcon
                        onClick={() => {
                          setCartData((prev) => {
                            const newCartData = [...cartData];
                            newCartData?.splice(i, 1);
                            return newCartData;
                          });
                        }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="infoContainer">
        {infoPages.find((data) => location.pathname === data.path)?.component}
      </div>
    </div>
  );
};

export default Sales;


