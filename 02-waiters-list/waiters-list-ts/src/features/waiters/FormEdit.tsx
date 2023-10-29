import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {saveItem} from "./store/thunk";
import {useNavigate} from "react-router-dom";
import {Page} from "../../components/Page";

export function FormEdit() {
    const dispatch = useDispatch()
    const waiter = useSelector((state: any) => state.waiter.editingWaiter)
    const navigate = useNavigate();
    const saveError = useSelector((state: any) => state.waiter.saveError)
    const [firstName, setFirstName] = useState(waiter.firstName)
    const [phone, setPhone] = useState(waiter.phone)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        setFirstName(waiter.firstName)
        setPhone(waiter.phone)
    }, [waiter])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (firstName && phone) {

            const newWaiter = {
                ...waiter,
                firstName,
                phone,
            }

            setError('')
            setLoading(true)

            try {
                // @ts-ignore
                await dispatch(saveItem(newWaiter))
                navigate("/waiters");
            } catch (e: any) {
                setError(e.message)
            } finally {
                setLoading(false)
            }

        }
    }

    return (
        <Page
            title='Edit waiters'
            loading={loading}
            error={error}
        >
            <form onSubmit={handleSubmit}>
                {saveError ? <div style={{color: 'red'}}>Unable to save data</div> : null}
                <div>
                    <label htmlFor="title">First name</label>
                    <input value={firstName} type="text" id="firstName" onChange={e => setFirstName(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="phone">Phone</label>
                    <input value={phone} type="text" id="phone" onChange={e => setPhone(e.target.value)}/>
                </div>

                <button disabled={loading} type="submit">Submit</button>
            </form>
            {error && <div style={{color: 'red'}}>{error}</div>}
        </Page>
    )
}