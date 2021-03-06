import React, {useState, useEffect} from 'react';
import './App.css';
import Counter from "./components/Counter";
import Box from "./components/Box";

function App() {
    const randomColor = [
        "#0E79B2",
        "#BF1363",
        "#F39237"
    ];
    const [number, setNumber] = useState(0);
    const [boxes, setBoxes] = useState([]);
    const [color, setColor] = useState(randomColor[Math.floor(Math.random() * randomColor.length)]);

    useEffect(() => {
        if (number % 10 === 0) {
            setColor(randomColor[Math.floor(Math.random() * randomColor.length)]);
        }
    }, [number]);

    let getColor = () => {
        if (number % 5 === 0) {
            let rand = Math.floor(Math.random() * randomColor.length);
            setColor(randomColor[rand]);
            return randomColor[rand];
        }
        return color;
    };

    useEffect(() => {
        if (number % 2 === 1) {
            let newBoxList = [...boxes];
            newBoxList.push({color: getColor(), number: number});
            setBoxes(newBoxList);
        }
    }, [number]);


    let box = boxes.map((it, idx) =>
       <Box key={idx} color={it.color} number={it.number}/>
    );

    let reset = () => {
        setNumber(0);
        setBoxes([]);
    };

    return (
        <div className="App">
            <button onClick={() => setNumber(number + 1)}>Increase</button>
            <button onClick={reset}>reset</button>
            <Counter count={number}/>
            <div className="boxes">{box}</div>
        </div>
    );
}

export default App;
