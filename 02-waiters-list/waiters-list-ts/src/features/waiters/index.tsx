import React, {useEffect} from "react";
import {FormEdit} from "./FormEdit";
import {WaiterList} from "./WaiterList";
import {useDispatch, useSelector} from "react-redux";
import {getList} from "./store/thunk";

export function WaitersApp() {
    const list = useSelector((state: any) => state.waiter.list)

    const dispatch = useDispatch()
    useEffect(() => {
        // @ts-ignore
        dispatch(getList())
    }, [getList])

    return (
        <div>
            <h1>Waiters list</h1>
            <WaiterList list={list}/>
            <FormEdit />

        </div>
    );
}