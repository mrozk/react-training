import {Waiter} from "./type";

interface TodoItemProps {
  waiter: Waiter;
}

export function WaiterItem({ waiter }: TodoItemProps) {
  return (
    <tr>
      <td>{waiter.id}</td>
      <td>{waiter.firstName}</td>
      <td>{waiter.phone}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  )
}
