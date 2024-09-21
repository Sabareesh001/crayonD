import "./SearchBar.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const SearchBar = ({placeholder}) => {
    return(
        <div className="searchBarComponentContainer">
        <div>
        <SearchOutlinedIcon/>
        </div>
        <input placeholder={placeholder}>
        </input>
        </div>
    )
};

export default SearchBar;
