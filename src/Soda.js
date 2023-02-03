import React from "react";
import {useNavigate} from 'react-router-dom';
import img from './images/soda.jpg';
import './Soda.css';

const Soda =() =>{
    let navigate = useNavigate();
    function handleClick() {
      navigate("/");
    }   
    
    return(
        <div className="Soda">
            <img className="soda-img" src={img} alt=""/>
            <div className="soda-msg">
                <h1>OMG SUGARRRRR</h1>
                <button onClick={handleClick}>Go Back</button>                
            </div>
            <img className="soda-img" src={img} alt=""/>
        </div>

    )
}

export default Soda;