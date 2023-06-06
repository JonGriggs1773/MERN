import React, {useState} from 'react';


const Counter = () => {
    const [count, setCount] = useState({
        clickCount: 0
    });

    const addOne = () => {
        setCount({
            clickCount: count.clickCount + 1
        });
}
    return (
        <div>
            <p>The Light is currently {count.clickCount}</p>
            <button onClick ={() => addOne()}>Click Me!</button>
        </div>
    )
}

export default Counter;



