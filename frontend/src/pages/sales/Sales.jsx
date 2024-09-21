import SearchBar from "../../../components/searchBar/SearchBar";
import "./Sales.css";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import TableRestaurantOutlinedIcon from '@mui/icons-material/TableRestaurantOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
const Sales = () => {
  return (
    <div className="salesContainer">
      <div className="mainContainer">
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
             <Person2OutlinedIcon/>
          </div>
          <div>
             <TableRestaurantOutlinedIcon/>
          </div>
          <div>
             <MoreVertOutlinedIcon/>
          </div>
        </div>
        </div>

          <div className="cardInfoTableContainer">
            <table className="cartInfoTable">
              <thead className="cartInfoHeadings">
                <th>Item</th>
                <th>Qty</th>
                <th>Amount(SAR)</th>
              </thead>
            </table>
          </div>
      </div>
      <div className="infoContainer"></div>
    </div>
  );
};

export default Sales;
