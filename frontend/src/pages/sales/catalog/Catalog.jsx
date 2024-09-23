import "./Catalog.css";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Button from "../../../../components/button/Button";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { useEffect, useState } from "react";
import axios from "axios";
import apiHost from "../../../config/config";
import Card from "../../../../components/card/Card";
const Catalog = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [catalogData, setCatalogData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredCatalogData, setFilteredCatalogData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null);
  console.log(searchParams);
  useEffect(() => {
    axios
      .get(`${apiHost}/api/products`)
      .then((response) => {
        setCatalogData(response.data || []);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(`${apiHost}/api/productCategories`)
      .then((response) => {
        setCategories(response.data || []);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    if (selectedFilter !== null) {
      setFilteredCatalogData(
        catalogData.filter((data) => {
          return (
            data.productCategoryMasterId ===
            categories[selectedFilter].id
          );
        })
      );
    } else {
      setFilteredCatalogData(catalogData);
    }
  }, [catalogData, selectedFilter]);
  return (
    <div className="catalogContainer">
      <div className="headBarAndFilterContainerCatalog">
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
          <div className="scrollableOptionsList">
            <div className="filterOptionsList">
              <div
                onClick={() => {
                  setSelectedFilter(null);
                }}
                className="allOption"
              >
                <Button
                  fillColor={selectedFilter === null ? "#3161d5" : ""}
                  borderColor={selectedFilter === null ? "none" : "gray"}
                  color={selectedFilter === null ? "white" : ""}
                  content={"All"}
                />
              </div>
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
              {categories.map((data, i) => {
                return (
                  <div
                    onClick={() => {
                      setSelectedFilter(i);
                    }}
                    className="filterOption"
                  >
                    <Button
                      fillColor={selectedFilter === i ? "#3161d5" : ""}
                      color={selectedFilter === i ? "white" : ""}
                      type="outlined"
                      content={<div className="iconContainer">{data.name}</div>}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="catalogContentContainer">
        {filteredCatalogData.map((data) => {
          return (
            <div
              onClick={() => {
                navigate(`catalog/variant?id=${data.id}`);
              }}
              className="cardComponentContainer"
            >
              <Card
                infoIcon={true}
                Image={data.img_url}
                title={data.name}
                subTitle={
                  data.variants.length > 1
                    ? `${data.variants.length} variants`
                    : ""
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Catalog;
