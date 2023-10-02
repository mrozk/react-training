import React, {useEffect, useState} from "react";
import {Waiter} from "./type";

interface FormEditProps {
    onTodoSubmit: (waiter: Waiter) => void,
    editingWaiter: Waiter | null
}

export function FormEdit({ onTodoSubmit, editingWaiter }: FormEditProps) {
    const [firstName, setFirstName] = useState(editingWaiter ? editingWaiter.firstName : '');
    const [phone, setPhone] = useState(editingWaiter ? editingWaiter.phone : '');

    useEffect(() => {
        setFirstName(editingWaiter ? editingWaiter.firstName : '')
        setPhone(editingWaiter ? editingWaiter.phone : '')
    }, [editingWaiter])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (firstName && phone) {
            onTodoSubmit({
                id: editingWaiter ? editingWaiter.id : undefined,
                firstName: firstName,
                phone: phone
            })
            setFirstName('');
            setPhone('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">First name</label>
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