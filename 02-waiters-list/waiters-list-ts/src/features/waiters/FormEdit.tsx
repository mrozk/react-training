import React, {useState} from "react";
import {Waiter} from "./type";

interface FormEditProps {
    onTodoSubmit: (waiter: Waiter) => void;
}

export function FormEdit({ onTodoSubmit }: FormEditProps) {
    // const [firstName, setTitle] = useState('')
    // const [done, setDone] = useState(false)
    const [firstName, setFirstName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (firstName && phone) {
            onTodoSubmit({
                firstName: firstName,
                phone: phone
            })
            setFirstName('');
            setPhone('');
        }
        //
        // onTodoSubmit({
        //     firstName,
        // })

        // setTitle('')
        // setDone(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input value={firstName} type="text" id="firstName" onChange={e => setFirstName(e.target.value) }/>
            </div>

            <div>
                <label htmlFor="phone">Phone</label>
                <input value={phone} type="text" id="phone" onChange={e => setPhone(e.target.value)}/>
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}