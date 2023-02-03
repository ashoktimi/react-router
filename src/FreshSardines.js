import React from "react";
import {useNavigate} from 'react-router-dom';
import './FreshSardines.css';

const FreshSardines =() =>{
    let navigate = useNavigate();
    function handleClick() {
      navigate("/");
    }   
    return(
        <div className="FreshSardines">
            <div className="FreshSardines-msg">
                <h1>YOU DON'T EAT THE SARDINES. THE SARDINES, THEY EAT YOU!</h1>
                <button onClick={handleClick}>Go Back</button>
            </div>            
        </div>
    )
}

export default FreshSardines;