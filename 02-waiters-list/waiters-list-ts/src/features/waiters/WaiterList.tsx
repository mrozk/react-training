import {Waiter} from "./type";
import {WaiterItem} from "./WaiterItem";
import React from "react";
import {useSelector} from "react-redux";

interface TodoListProps {
  list: Waiter[],
}

export function WaiterList({ list }: TodoListProps): React.ReactElement {
  const loading = useSelector((state: any) => state.waiter.listLoading)
  const error = useSelector((state: any) => state.waiter.listError)

  if (loading) {
     return <div>Loading...</div>
  }

  if (error) {
     return <div style={{ color: 'red'}}>{error.message}</div>
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {list.map((waiter) => <WaiterItem waiter={waiter} key={waiter.id} />)}
      </tbody>
    </table>
  );
}
