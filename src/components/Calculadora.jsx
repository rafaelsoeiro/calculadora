import React from "react";
import { useState } from "react";
import "./Calculadora.css";
import Display from "./Display/Display";
import Button from "./Button/Button";

const Calculatora = () => {
    const [current, setCurrent] = useState("");
    const [previus, setPrevius] = useState("");
    const [operation, setOperation] = useState("");

    const clear = () => {
        setCurrent("");
        setPrevius("");
        setOperation("");
        console.log("limpou display");
    };

    const addDigit = (n) => {
        if (n === "." && current.includes(".")) {
            return;
        }
        let digito = current;
        digito = digito + n;
        setCurrent(digito);
        console.log(n);
    };

    const addOperation = (op) => {
        if (previus !== "") {
            switchOpeation(op);
        }
        if (previus !== "" && current !== "") {
            doOperation(op);
            return;
        }
        if (current === "") {
            return;
        }

        setOperation(op);
        setPrevius(current);
        setCurrent("");
        console.log(op);
    };

    const switchOpeation = (newOp) => {
        setOperation(newOp);
    };

    const equals = ()=>{
        if(current!=='' && previus!== ''){
            doOperation(operation)
        }
    }

    const doOperation = (op) => {
        let resultadoOperacao
        switch (op) {
            case "+":
                console.log("adicionou "+op);
                resultadoOperacao = parseFloat(current) + parseFloat(previus);
                setPrevius(resultadoOperacao.toString());
                setCurrent("");
                setOperation("")
                console.log(`Antes era ${previus} e adicionou-se ${current}. Então o resultado foi ${resultadoOperacao}`)
                break;
            case "-":
                console.log("subtraiu "+op);
                resultadoOperacao =  parseFloat(previus) - parseFloat(current)
                setPrevius(resultadoOperacao.toString())
                setCurrent("");
                setOperation("")
                console.log(`Antes era ${previus} e subtraiu-se ${current}. Então o resultado foi: ${resultadoOperacao}`)
                break;
            case "*":
                console.log("multiplicou "+op);
                 resultadoOperacao = parseFloat(current) * parseFloat(previus);
                setPrevius(resultadoOperacao.toString())
                setCurrent("");
                setOperation("")
                console.log(`Antes era ${previus} e multiplicou por ${current}. Então o resultado foi: ${resultadoOperacao}`)
                break;
            case "/":
                console.log("dividiu "+op);
                resultadoOperacao = parseFloat(previus) / parseFloat(current)
                setPrevius(resultadoOperacao.toString())
                setCurrent("");
                setOperation("")
                console.log(`Antes era ${previus} e dividiu por ${current}. Então o resultado foi: ${resultadoOperacao}`)
                break;
            default:
                console.log("Caiu no defaut");
                console.log(op)
                break;
        }
    };
    return (
        <div className="container-calculadora">
            <Display
                previusValue={previus}
                currentValue={current}
                operation={operation}
            />
            <Button label="AC" btn triple click={clear} />
            <Button label="/" operation click={addOperation} />
            <Button label="7" btn click={addDigit} />
            <Button label="8" btn click={addDigit} />
            <Button label="9" btn click={addDigit} />
            <Button label="*" operation click={addOperation} />
            <Button label="4" btn click={addDigit} />
            <Button label="5" btn click={addDigit} />
            <Button label="6" btn click={addDigit} />
            <Button label="-" operation click={addOperation} />
            <Button label="1" btn click={addDigit} />
            <Button label="2" btn click={addDigit} />
            <Button label="3" btn click={addDigit} />
            <Button label="+" operation click={addOperation} />
            <Button label="0" btn double click={addDigit} />
            <Button label="." btn click={addDigit} />
            <Button label="=" operation click={equals} />
        </div>
    );
};
export default Calculatora;
