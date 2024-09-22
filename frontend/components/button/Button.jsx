import './Button.css'


const Button = ({type="filled",content,color,fillColor,borderColor})=>{
    return(
        <div style={{color:color,backgroundColor:fillColor,border:`solid ${borderColor} 0.5px`}} className={type}>
             {
               content
             }
        </div>
    )
}

export default Button