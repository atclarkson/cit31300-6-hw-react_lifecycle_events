import React, {useState} from "react";

function Counter(props) {
    const [count, setCounter] = useState(0);

    return (
        <div>
            <h2>You clicked {props.count} times</h2>
        </div>
    );
}

export default Counter