import {useState} from 'react';

export default function Form() {
    const [person, setPerson] = useState({
        name: 'Niki de Saint Phalle',
        email: 'asdada@asdas.ru',
        subscribed: false,
    });

    function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setPerson({
            ...person,
            name: e.target.value
        });
    }

    function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
        setPerson({
            ...person,
            email: e.target.value
        });
    }

    function handleSubscribeChange(e: React.ChangeEvent<HTMLInputElement>) {
        setPerson({
            ...person,
            subscribed: e.target.checked
        });
    }

    return (
        <>
            <label>
                Name:
                <input
                    value={person.name}
                    onChange={handleNameChange}
                />
            </label>
            <label>
                Email:
                <input
                    value={person.email}
                    onChange={handleEmailChange}
                />
            </label>
            <label>
                Subscribe:
                <input
                    type="checkbox"
                    checked={person.subscribed}
                    onChange={handleSubscribeChange}
                />
            </label>
        </>
    );
}
