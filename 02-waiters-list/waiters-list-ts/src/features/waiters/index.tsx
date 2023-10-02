import React, {useEffect} from "react";
import {Waiter} from "./type";
import {WaitersApi} from "./api/WaitersApi";
import {FormEdit} from "./FormEdit";
import {WaiterList} from "./WaiterList";

export function WaitersApp() {
    const [list, setList] = React.useState<Waiter[]>([])
    const [editingWaiter, setEditingWaiter] = React.useState<Waiter | null>(null);

    useEffect(() => {
        WaitersApi.getList().then((waitersList) => {
            console.log(waitersList)
            setList(waitersList)
        })
    }, [])

    const deleteWaiter = (id: number) => {
        WaitersApi.delete(id).then(() => {
            setList(list.filter((todo) => todo.id !== id))
        })
    }

    const onWaitersSubmit = (waiter: Waiter) => {
        if(waiter.id) {
            WaitersApi.update(waiter.id, waiter).then((updatedWaiter) => {
                setEditingWaiter(null)
                setList(list.map((waiter) => waiter.id === updatedWaiter.id ? updatedWaiter : waiter))
            })
        } else {
            WaitersApi.create(waiter).then((newWaiter) => {
                setList([...list, newWaiter])
            })
        }
    }

    return (
        <div>
            <h1>Waiters list</h1>
            <WaiterList editWaiter={setEditingWaiter} deleteWaiter={deleteWaiter} list={list}/>
            <FormEdit onTodoSubmit={onWaitersSubmit} editingWaiter={editingWaiter} />

        </div>
    );
}