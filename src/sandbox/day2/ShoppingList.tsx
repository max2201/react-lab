import { useState } from "react";

type Item = {
    id: string;
    title: string;
    done: boolean;
};

const initialItems: Item[] = [
    { id: crypto.randomUUID(), title: "Buy milk", done: true },
    { id: crypto.randomUUID(), title: "Eat tacos", done: false },
    { id: crypto.randomUUID(), title: "Brew tea", done: false },
];

type AddItemProps = {
    onAddItem: (title: string) => void;
};

function AddItem({ onAddItem }: AddItemProps) {
    const [title, setTitle] = useState("");

    function add() {
        const nextTitle = title.trim();
        if (!nextTitle) return;

        onAddItem(nextTitle);
        setTitle("");
    }

    return (
        <>
            <input
                placeholder="Add item"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && add()}
            />
            <button onClick={add}>Add</button>
        </>
    );
}

type ShoppingItemProps = {
    item: Item;
    onChange: (nextItem: Item) => void;
    onDelete: (itemId: Item["id"]) => void;
};

function ShoppingItem({ item, onChange, onDelete }: ShoppingItemProps) {
    return (
        <label>
            <input
                type="checkbox"
                checked={item.done}
                onChange={(e) => {
                    onChange({
                        ...item,
                        done: e.target.checked,
                    });
                }}
            />
            {item.title}
            <button onClick={() => onDelete(item.id)}>Delete</button>
        </label>
    );
}

type ItemListProps = {
    items: Item[];
    onChangeItem: (nextItem: Item) => void;
    onDeleteItem: (itemId: Item["id"]) => void;
};

function ItemList({ items, onChangeItem, onDeleteItem }: ItemListProps) {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    <ShoppingItem
                        item={item}
                        onChange={onChangeItem}
                        onDelete={onDeleteItem}
                    />
                </li>
            ))}
        </ul>
    );
}

export default function ShoppingList() {
    const [items, setItems] = useState(initialItems);

    function handleAddItem(title: string) {
        setItems((prev) => [
            ...prev,
            { id: crypto.randomUUID(), title, done: false },
        ]);
    }

    function handleChangeItem(nextItem: Item) {
        setItems((prev) =>
            prev.map((item) => (item.id === nextItem.id ? nextItem : item)),
        );
    }

    function handleDeleteItem(itemId: Item["id"]) {
        setItems((prev) => prev.filter((item) => item.id !== itemId));
    }

    return (
        <>
            <AddItem onAddItem={handleAddItem} />
            <ItemList
                items={items}
                onChangeItem={handleChangeItem}
                onDeleteItem={handleDeleteItem}
            />
        </>
    );
}
