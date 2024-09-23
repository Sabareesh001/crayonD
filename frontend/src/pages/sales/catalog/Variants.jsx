import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import "./Variant.css";
import { useEffect, useState } from "react";
import apiHost from "../../../config/config";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import Button from "../../../../components/button/Button";
import IncrementableSlider from "../../../../components/incrementableSlider/IncrementableSlider";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Variants = ({setCartData}) => {
  const [variantData, setVariantData] = useState([]);
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState(
    { variant: null,product:null,quantity: 0, amount: 0 });
  const [searchParams, setSearchParams] = useSearchParams();
 const [selectedVariant,setSelectedVariant] = useState(null);
  useEffect(() => {
    axios
      .get(`${apiHost}/api/productVariants/${searchParams.get("id")}`)
      .then((response) => {
        console.log(response.data);
        setVariantData(response.data);
      });
  }, []);
  return (
    <div className="variantMasterContainer">
      <div className="variantSelectInfoContainer">
        <div className="variantHeadingContainer">
          <h4>Variants & Add-ons</h4>
          <div
            onClick={() => {
              navigate(-1);
            }}
            className="backArrow"
          >
            <ArrowBackIosOutlinedIcon />
          </div>
        </div>
        <div className="variantProductDetails">
          <div className="variantProductImage">
            <img src={variantData?.product?.img_url}></img>
          </div>
          <p>{variantData?.product?.name}</p>
        </div>
        <div className="variantsAndAddOnButtonContainer">
          <div className="variantsButton">{`Variants(${variantData?.variants?.length})`}</div>
          <div className="addonsButton">Add-ons</div>
        </div>
        <div>
          <h4>Quantity</h4>
          {variantData?.variants?.map((data,i) => {
            return (
              <div  className="variantsOptionsContainer">
                <div className="selectVariantRadio" onClick={()=>{
                  setSelectedVariant(i)
                  setOrderDetails(
                    {
                        variant:data,
                        quantity:1,
                        amount:data.price,
                        product:variantData.product
                    }
                )   
                  }}>
                 { i!==selectedVariant?
               <RadioButtonUncheckedIcon  />:
               <RadioButtonCheckedIcon style={{color:"#3161d5"}}/>}
                  <p style={{fontSize:`${16-i}px`}}>{data.name}</p>
                </div>
          
                <b style={{color:(selectedVariant === i)?'#3161d5':''}}>SAR {data.price}</b>
              </div>
            );
          })}
        </div>
      </div>
      <div className="variantSelectionActionsMasterContainer">
        <div className="variantSelectionActionsContainer">
          <div className="itemsLabelAndAmountTotal">
            <div>Item Total</div>
            <div>
              SAR{" "}
              {(orderDetails?.amount *
                orderDetails?.quantity).toFixed(2)}
            </div>
          </div>
          <div className="addOrderButtonsContainer">
            <div>
              <Button
              borderColor={'gray'}
                content={
                  <div>
                    <IncrementableSlider
                      incrementValue={() => {
                        if(orderDetails.variant===null){
                          return
                        }
                        setOrderDetails((prev) => {
                          const newOrderDetails = {...prev};
                          newOrderDetails.quantity += 1; // Increment the quantity
                          return newOrderDetails;
                        });
                      }}
                      decrementValue={() => {
                        setOrderDetails((prev) => {
                          const newOrderDetails = {...prev};
                          if (newOrderDetails.quantity > 1) {
                            newOrderDetails.quantity -= 1; // Decrement the quantity, but not below 0
                          }
                          return newOrderDetails;
                        });
                      }}
                      value={orderDetails?.quantity}
                    />
                  </div>
                }
              />
            </div>
            <div
            onClick={()=>{
               if(orderDetails.quantity<1){
                toast.error('Please select something to Add');
                return;
               }
                setCartData((prev)=>{
                    const newPrev = [...prev]
                    newPrev.push({...orderDetails})
                    return newPrev;
                }
                )
            }}
            >
              <Button
                fillColor={"#3161d5"}
                color={"white"}
                content={<div>Add to Order</div>}
              />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Variants;
