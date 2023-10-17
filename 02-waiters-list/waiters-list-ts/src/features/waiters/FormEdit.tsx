import React, {useEffect, useState} from "react";
import {Waiter} from "./type";
import {useDispatch, useSelector} from "react-redux";
import {saveItem} from "./store/thunk";

export function FormEdit() {
    const dispatch = useDispatch()
    const waiter = useSelector((state: any) => state.waiter.editingWaiter)
    const [firstName, setFirstName] = useState(waiter.firstName)
    const [phone, setPhone] = useState(waiter.phone)

    useEffect(() => {
        setFirstName(waiter.firstName)
        setPhone(waiter.phone)
    }, [waiter])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (firstName && phone) {

            const newWaiter = {
                ...waiter,
                firstName,
                phone,
            }

            // @ts-ignore
            dispatch(saveItem(newWaiter))
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
                <input value={phone} type="text" id="phone" onChange={e => setPhone(e.target.value)} />
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}