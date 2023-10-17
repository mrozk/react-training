import {
  getListActionSuccess,
  getListActionError, removeItemAction, createItemAction, updateItemAction, getListActionLoading,
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
  return (dispatch: any) => {
    WaitersApi.delete(id).then(() => {
      dispatch(removeItemAction(id))
    })
  }
}
//
export function saveItem(waiter: Waiter) {
  return (dispatch: any) => {
    if (waiter.id) {
      WaitersApi.update(waiter.id, waiter).then((updatedTodo) => {
        dispatch(updateItemAction(updatedTodo))
      })
    } else {
      WaitersApi.create(waiter).then((newTodo) => {
        dispatch(createItemAction(newTodo))
      })
    }
  }
}

// dispatch(getList()) -> f -> thunk -> f(dispatch, getState) -> dispatch({}) -> {} -> reducer -> state