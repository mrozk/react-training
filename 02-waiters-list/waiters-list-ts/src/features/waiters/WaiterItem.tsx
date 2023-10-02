import {Waiter} from "./type";

interface TodoItemProps {
  waiter: Waiter,
  deleteWaiter: (id: number) => void;
  editWaiter: (waiter: Waiter) => void;
}

export function WaiterItem({waiter, deleteWaiter, editWaiter}: TodoItemProps) {

    // function onEditBtnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    //     editWaiter(waiter)
    // }

    function onDeleteBtnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        console.log(event)
        console.log(waiter.id)

        if (waiter.id) {
            deleteWaiter(waiter.id)
        }
    }

    return (
        <tr>
            <td>{waiter.id}</td>
            <td>{waiter.firstName}</td>
            <td>{waiter.phone}</td>
            <td>
                <button onClick={() => editWaiter(waiter)}>Edit</button>
                <button onClick={onDeleteBtnClick}>Delete</button>
            </td>
        </tr>
    )
}
