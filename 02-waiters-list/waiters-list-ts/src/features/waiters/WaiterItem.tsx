import {Waiter} from "./type";
import {useDispatch} from "react-redux";
import {removeItem, saveItem} from "./store/thunk";
import {setEditingItemAction} from "./store/actions";

interface TodoItemProps {
  waiter: Waiter,
}

export function WaiterItem({waiter}: TodoItemProps) {
    const dispatch = useDispatch()

    function onEditBtnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        // @ts-ignore
        dispatch(setEditingItemAction(waiter))
    }

    function onDeleteBtnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if (waiter.id) {
            // @ts-ignore
            dispatch(removeItem(waiter.id))
        }
    }

    return (
        <tr>
            <td>{waiter.id}</td>
            <td>{waiter.firstName}</td>
            <td>{waiter.phone}</td>
            <td>
                <button onClick={onEditBtnClick}>Edit</button>
                <button onClick={onDeleteBtnClick}>Delete</button>
            </td>
        </tr>
    )
}
