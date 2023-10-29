import {Waiter} from "./type";
import {WaiterItem} from "./WaiterItem";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Page} from "../../components/Page";
import {getList} from "./store/thunk";

export function WaiterList(): React.ReactElement {
    const list: Waiter[] = useSelector((state: any) => state.waiter.list || [])

    const loading = useSelector((state: any) => state.waiter.listLoading)
    const error = useSelector((state: any) => state.waiter.listError)
    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(getList())
    }, [getList])

    return (
        <Page
            title='Waiters List'
            loading={loading}
            error={error}
        >
            <div>
                <div>
                    <Link to="/waiters/create">
                        <button>Create</button>
                    </Link>
                </div>
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
                    {list.map((waiter) => <WaiterItem waiter={waiter} key={waiter.id}/>)}
                    </tbody>
                </table>
            </div>
        </Page>
    );
}
