import { useState } from "react";

export function CounterWrong() {
    const [count, setCount] = useState(0);

    return (
        <section>
            <h2>Wrong: {count}</h2>
            <button
                onClick={() => {
                    setCount(count + 1);
                    setCount(count + 1);
                    setCount(count + 1);
                }}
            >
                +3
            </button>
        </section>
    );
}

export function CounterRight() {
    const [count, setCount] = useState(0);

    return (
        <section>
            <h2>Right: {count}</h2>
            <button
                onClick={() => {
                    setCount((prev) => prev + 1);
                    setCount((prev) => prev + 1);
                    setCount((prev) => prev + 1);
                }}
            >
                +3
            </button>
        </section>
    );
}
