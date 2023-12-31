import {Waiter} from "./type";
import {useDispatch} from "react-redux";
import {removeItem, saveItem} from "./store/thunk";
import {setEditingItemAction} from "./store/actions";
import React from "react";

interface TodoItemProps {
  waiter: Waiter,
}

export function WaiterItem({waiter}: TodoItemProps) {
    const dispatch = useDispatch()
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState('')

    function onEditBtnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        // @ts-ignore
        dispatch(setEditingItemAction(waiter))
    }

    async function onDeleteBtnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if (waiter.id) {
            setError('')
            setLoading(true)

            try {
                // @ts-ignore
                await dispatch(removeItem(waiter.id))
            } catch (e: any) {
                setError(e.message)
            } finally {
                setLoading(false)
            }
        }
    }

    return (
        <tr>
            <td>{waiter.id}</td>
            <td>{waiter.firstName}</td>
            <td>{waiter.phone}</td>
            <td>
                <button onClick={onEditBtnClick} disabled={loading}>Edit</button>
                <button onClick={onDeleteBtnClick} disabled={loading}>Delete</button>
                {error && <span style={{ color: 'red' }}>{error}</span>}
            </td>
        </tr>
    )
}
