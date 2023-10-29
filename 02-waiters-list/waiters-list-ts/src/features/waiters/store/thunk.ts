import {
  getListActionSuccess,
  getListActionError, removeItemAction, createItemAction, updateItemAction, getListActionLoading, getSaveActionError,
} from "./actions";
import {WaitersApi} from "../api/WaitersApi";
import {Waiter} from "../type";

export function getList() {
  return (dispatch: any) => {
    dispatch(getListActionLoading())

    WaitersApi
      .getList()
      .then((waiterList) => {
        dispatch(getListActionSuccess(waiterList))
      })
      .catch((error) => {
        dispatch(getListActionError(error))
      })
  }
}

export function removeItem(id: number) {
  return async (dispatch: any) => {
    await WaitersApi.delete(id)
    dispatch(removeItemAction(id))
  }
}
//
export function saveItem(waiter: Waiter) {
  return async (dispatch: any) => {
    if (waiter.id) {
      const updatedTodo = await WaitersApi.update(waiter.id, waiter)

      dispatch(updateItemAction(updatedTodo))
    } else {
      const waiterPromise = await WaitersApi.create(waiter);
      dispatch(createItemAction(waiterPromise))
    }
  }
}