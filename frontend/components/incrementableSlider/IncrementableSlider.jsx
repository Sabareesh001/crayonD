import './IncrementableSlider.css'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { useEffect, useState } from 'react';
const IncrementableSlider = ({value,incrementValue,decrementValue})=>{
    return(
        <div className='incrementableSliderContainer'>
           
            <RemoveOutlinedIcon
            onClick={()=>{decrementValue()}}
            />
             <div>{value}</div>

             <AddOutlinedIcon onClick={()=>{incrementValue()}}/>
        </div>
    )
}

export default IncrementableSlider