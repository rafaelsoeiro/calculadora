import React from "react";
import { useState } from "react";
import "./Calculadora.css";
import Display from "./Display/Display";
import Button from "./Button/Button";

const Calculatora = () => {
    const [current, setCurrent] = useState(0);
    const [previus, setPrevius] = useState(0);
    const [operation, setOperation] = useState("");

    function clear(e) {
        setCurrent(0)
        setPrevius(0)
        console.log('limpou')
    }
    function addDigit(n){
        
        console.log(n)
    }
    return (
        <div className="container-calculadora">
            <Display previusValue={previus} currentValue={current} />

            <Button label="AC" btn click={() => clear()} triple />
            <Button label="/" operation />
            <Button label="8" btn click={()=> addDigit()} />
            <Button label="7" btn  />
            <Button label="9" btn  />
            <Button label="*" operation />
            <Button label="4" btn  />
            <Button label="5" btn  />
            <Button label="6" btn  />
            <Button label="-" operation  />
            <Button label="1" btn  />
            <Button label="2" btn  />
            <Button label="3" btn  />
            <Button label="+" operation  />
            <Button label="0" btn  double />
            <Button label="." btn  />
            <Button operation label="=" />
        </div>
    );
};

export default Calculatora;
