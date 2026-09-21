import { CounterRight, CounterWrong } from "./sandbox/day2/Counter.tsx";
import Form from "./sandbox/day2/Form.tsx";
import ShoppingList from "./sandbox/day2/ShoppingList.tsx";

export default function App() {
    return (
        <div className="app">
            <CounterWrong />
            <CounterRight />
            <Form />
            <ShoppingList />
        </div>
    );
}
