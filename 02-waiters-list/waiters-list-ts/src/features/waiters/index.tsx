import React, {useEffect} from "react";
import {Waiter} from "./type";
import {WaitersApi} from "./api/WaitersApi";
import {FormEdit} from "./FormEdit";
import {WaiterList} from "./WaiterList";

export function WaitersApp() {
    const [list, setList] = React.useState<Waiter[]>([])

    useEffect(() => {
        WaitersApi.getList().then((waitersList) => {
            console.log(waitersList)
            setList(waitersList)
        })
    }, [])

    const onWaitersSubmit = (waiter: Waiter) => {
        WaitersApi.create(waiter).then((newWaiter) => {
            setList([...list, newWaiter])
        })
    }

    return (
        <div>
            <h1>Waiters list</h1>
            <WaiterList list={list}/>
            <FormEdit onTodoSubmit={onWaitersSubmit} />

        </div>
    );
}