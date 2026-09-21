import { useState } from "react";

export default function Form() {
    const [person, setPerson] = useState({
        name: "Niki de Saint Phalle",
        email: "asdada@asdas.ru",
        subscribed: false,
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, type, value, checked } = e.target;
        setPerson((prev) => {
            return {
                ...prev,
                [name]: type === "checkbox" ? checked : value,
            };
        });
    }

    return (
        <>
            <label>
                Name:
                <input
                    name="name"
                    value={person.name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Email:
                <input
                    name="email"
                    value={person.email}
                    onChange={handleChange}
                />
            </label>
            <label>
                Subscribe:
                <input
                    name="subscribed"
                    type="checkbox"
                    checked={person.subscribed}
                    onChange={handleChange}
                />
            </label>
        </>
    );
}
