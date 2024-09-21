import './Card.css'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const Card = ({Image,title,subTitle,infoIcon})=>{
    return(
        <div className='cardContainer'>
         <div className='cardImage'>
            <img src={Image} />
         </div>
         {infoIcon && <div className='infoIcon'>
            <InfoOutlinedIcon/>
         </div>}
         <div className='cardTextContent'>
            <h4>{title}</h4>
            <p>{subTitle}</p>
         </div>
        </div>
    )
}

export default Card;