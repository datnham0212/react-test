import React, { useState } from "react";
import { create, all } from 'mathjs';
import "./static/Calculator.css"
const math = create(all);

const Calculator = () => {
    const [display, setDisplay] = useState("");
    const [prevAns, setPrevAns] = useState('');
    const buttonPressed = (buttonValue) => {
        if (buttonValue === "C") {
            setDisplay("");
        } 
        else if (buttonValue === "CE") {
            setDisplay(display.slice(0, -1));
        }
        else if (buttonValue === "Ans"){
            setDisplay(display + prevAns);
        }
        else if(buttonValue === "MC"){
            setPrevAns('');
        }
        else if (buttonValue === "=") {
            try {
                const result = math.evaluate(display);
                setDisplay(result.toString());
                setPrevAns(result);
            } catch (error) {
                setDisplay("Error");
            }
        } else {
            setDisplay(display + buttonValue);
        }
    };

    return (
        <>
        <div className="calc-body">
            <input type="text" className="calc-display" value={display} readOnly /> 
            <div className="calc-keyboard">
                <table className="op-buttons">
                    <tbody>
                    <tr>
                        <td><button className="calc-button" onClick={() => buttonPressed("C")}>C</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("MC")}>MC</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("pi/18")}>deg</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("%")}>mod</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("(")}>(</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed(")")}>)</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("/")}>÷</button></td>
                    </tr>
                    <tr>
                        <td><button className="calc-button" onClick={() => buttonPressed("cot(")}>cot</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("tan(")}>tan</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("cos(")}>cos</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("sin(")}>sin</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("^")}>aⁿ</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("!")}>n!</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("*")}>x</button></td>
                    </tr>
                    <tr>
                        <td><button className="calc-button" onClick={() => buttonPressed("e")}>e</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("log10(")}>log</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("log(")}>ln</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("pi")}>π</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("^2")}>n²</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("abs(")}>abs</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("-")}>-</button></td>
                    </tr>
                    <tr>
                        <td><button className="calc-button" onClick={() => buttonPressed("Ans")}>Ans</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("e^")}>Exp</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("10^")}>10^</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("/100")}>%</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("sqrt(")}>√</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed(".")}>.</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("+")}>+</button></td>
                    </tr>
                    </tbody>
                </table>
                <table className="numeric-buttons">
                    <tbody>
                    <tr>
                        <td><button className="calc-button" onClick={() => buttonPressed("7")}>7</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("8")}>8</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("9")}>9</button></td>
                    </tr>
                    <tr>
                        <td><button className="calc-button" onClick={() => buttonPressed("6")}>6</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("5")}>5</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("4")}>4</button></td>
                    </tr>
                    <tr>
                        <td><button className="calc-button" onClick={() => buttonPressed("3")}>3</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("2")}>2</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("1")}>1</button></td>
                    </tr>
                    <tr>
                        <td><button className="calc-button" onClick={() => buttonPressed("=")}>=</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("0")}>0</button></td>
                        <td><button className="calc-button" onClick={() => buttonPressed("CE")}>CE</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default Calculator;
