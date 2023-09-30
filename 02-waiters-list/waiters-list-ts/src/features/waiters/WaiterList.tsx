import {Waiter} from "./type";
import {WaiterItem} from "./WaiterItem";
import React from "react";

interface TodoListProps {
  list: Waiter[];
}

export function WaiterList({ list }: TodoListProps): React.ReactElement {
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
        {list.map((waiter) => <WaiterItem waiter={waiter} key={waiter.id} />)}
      </tbody>
    </table>
  );
}
