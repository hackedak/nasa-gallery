import { useState } from "react";

const Explanation = ({explanation, copyright}) => {
    
    const [isActive, setActive] = useState(false)

    const toggleClass = () =>{
        setActive(!isActive)
    }

    return ( 
        <div className="explanation-btn">
            <button type='button' onClick={toggleClass}>Enlighten Me</button>
            <div className = {isActive ? "explanation" : "hide" }>
                <p>{explanation}</p>
                <small>Copyright &copy; 2020 Alvin Wu</small>
            </div>
        </div>
     );
}
 
export default Explanation;