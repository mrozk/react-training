import {Waiter} from "./type";
import {WaiterItem} from "./WaiterItem";
import React from "react";

interface TodoListProps {
  list: Waiter[],
  deleteWaiter: (id: number) => void,
  editWaiter: (waiter: Waiter) => void;
}

export function WaiterList({ list, editWaiter, deleteWaiter }: TodoListProps): React.ReactElement {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Done</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {list.map((waiter) => <WaiterItem editWaiter={editWaiter} deleteWaiter={deleteWaiter}  waiter={waiter} key={waiter.id} />)}
      </tbody>
    </table>
  );
}
