import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import img from './images/chips.png';
import './Chips.css';

const Chips =() =>{

    const [count, setCount] = useState(0)
    let navigate = useNavigate();
    
    function handleClick() {
      navigate("/");
    }   
    
    function handleSubmit(){
        setCount(c => c+1)
    }
console.log(count)

    return(
        <div className="chips">       
            <img className="chips-img" src={img} alt="" />
            <p>BAG EATEN:{count}</p>
            <button className="chips-addBtn" onClick={handleSubmit}>NOM NOM NOM</button>
            <button className="chips-backBtn" onClick={handleClick}>Go Back</button>
        </div>
    )
}

export default Chips;


