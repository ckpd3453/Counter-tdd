import React from "react";

const Counter = () => {
    const [counter, setCounter] = React.useState(0);

    return (
        <>
            <h1 data-testid='Counter'> {counter} </h1>
            <button data-testid='up-button' onClick={() => setCounter(counter+1)}>
                Increment
            </button>
            <button data-testid='down-button' onClick={() => setCounter(counter-1)}>
                Decrement
            </button>
        </>
    )
}

export default Counter;