import "./Catalog.css";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/button/Button";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { useState } from "react";
import Card from "../../../../components/card/Card";
const Catalog = () => {
  const navigate = useNavigate();
  const [filterOptions, setFilterOptions] = useState([
    "Burger",
    "Sandwich",
    "Juice",
  ]);
  const [catalogData, setCatalogData] = useState([
    {
      title: "Chicken BBQ pizza",
      variants: 2,
      image:
        "https://www.allrecipes.com/thmb/qZ7LKGV1_RYDCgYGSgfMn40nmks=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-24878-bbq-chicken-pizza-beauty-4x3-39cd80585ad04941914dca4bd82eae3d.jpg",
    },
    {
      title: "French fries combo",
      variants: 0,
      image:
        "https://www.kuchpakrahahai.in/wp-content/uploads/2023/05/Air-fried-french-fries.jpg",
    },
    {
      title: "Pan pizza",
      variants: 0,
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2014/08/Baked-No-Knead-Pan-Pizza.jpg",
    },
    {
      title: "Mushroom Sandwich",
      variants: 2,
      image:
        "https://static.toiimg.com/thumb/62707809.cms?imgsize=399746&width=800&height=800",
    },
    {
      title: "Watermelon Juice",
      variants: 0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_T-o-xI5XB2Pdyj0tnRNV15vqipbnRRSMg&s",
    },
    {
      title: "Plain Nachos",
      variants: 2,
      image:
        "https://manilabambifoods.com/cdn/shop/products/NS_ServingSug_MG_5742_1024x1024.jpg?v=1660031757",
    },
    {
      title: "Mexican Nachos with salsa",
      variants: 0,
      image:
        "https://static01.nyt.com/images/2020/11/04/dining/29nachosrex2/merlin_179172954_f28f94f2-a915-4df4-8605-441f8d1ab276-articleLarge.jpg",
    },
    {
      title: "Grape Juice",
      variants: 2,
      image:
        "https://www.alphafoodie.com/wp-content/uploads/2022/03/How-to-Make-Grape-Juice-Square.jpeg",
    },
    {
      title: "Mango juice with salad",
      variants: 0,
      image:
        "https://www.crazyvegankitchen.com/wp-content/uploads/2023/06/mango-juice-recipe.jpg",
    },
  ]);
  return (
    <div className="catalogContainer">
      <div className="headBarCatalog">
        <h4>Catalog</h4>
        <div className="headBarCatalogIcons">
          <MoreVertOutlinedIcon />
          <CloseOutlinedIcon
            onClick={() => {
              navigate("/sales");
            }}
          />
        </div>
      </div>
      <div className="catalogFilterOptionsContainer">
        <div className="allOption">
          <Button fillColor={"#3161d5"} color={"white"} content={"All"} />
        </div>
        <div className="scrollableOptionsList">
          <div className="filterOption">
            <Button
              type="outlined"
              content={
                <div className="iconContainer">
                  <StarBorderOutlinedIcon /> Favorites
                </div>
              }
            />
          </div>
          {filterOptions.map((option) => {
            return (
              <div className="filterOption">
                <Button
                  type="outlined"
                  content={<div className="iconContainer">{option}</div>}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="catalogContentContainer">
        {catalogData.map((data) => {
          return (
            <div className="cardComponentContainer">
              <Card
                infoIcon={true}
                Image={data.image}
                title={data.title}
                subTitle={data.variants > 0 ? `${data.variants} variants` : ""}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Catalog;
