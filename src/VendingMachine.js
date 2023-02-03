import React from "react";
import { Link } from "react-router-dom";
import './VendingMachine.css'
import img from './images/vending machine.jpg';


const VendingMachine =() =>{

  return (
    <div className="VendingMachine">
        <h1>HELLO I AM VENDING MACHINE. WHAT WOULD YOU LIKE TO HAVE?</h1>
        <img src={img} alt=""/>
      <div className="VendingMachine-Link">
        <Link to="soda">SODA</Link>
        <Link to="chips">CHIPS</Link>
        <Link to="sardines">FRESH SARDINES</Link>
      </div>
    </div>
  );
}

export default VendingMachine;