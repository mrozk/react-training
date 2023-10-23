import {Waiter} from "../type";

export const ACTION_WAITER_GET_LIST_LOADING = 'ACTION_WAITER_GET_LIST_LOADING'
export const ACTION_WAITER_GET_LIST_SUCCESS = 'ACTION_WAITER_GET_LIST_SUCCESS'
export const ACTION_WAITER_GET_LIST_ERROR = 'ACTION_WAITER_GET_LIST_ERROR'
export const ACTION_WAITER_SAVE_WAITER_ERROR = 'ACTION_WAITER_SAVE_WAITER_ERROR'

export const ACTION_WAITER_SET_EDITING_ITEM = 'ACTION_WAITER_SET_EDITING_ITEM'
export const ACTION_WAITER_UPDATE_ITEM = 'ACTION_WAITER_UPDATE_ITEM'
export const ACTION_WAITER_CREATE_ITEM = 'ACTION_WAITER_CREATE_ITEM'
export const ACTION_WAITER_REMOVE_ITEM = 'ACTION_WAITER_REMOVE_ITEM'

export function getListActionLoading() {
  return { type: ACTION_WAITER_GET_LIST_LOADING }
}

export function getListActionSuccess(list: Waiter[]) {
  return { type: ACTION_WAITER_GET_LIST_SUCCESS, payload: list, }
}

export function getListActionError(error: Error) {
  return { type: ACTION_WAITER_GET_LIST_ERROR, payload: error, }
}

export function getSaveActionError(error: Error) {
  return { type: ACTION_WAITER_SAVE_WAITER_ERROR, payload: error, }
}

export function setEditingItemAction(todo: Waiter) {
  return { type: ACTION_WAITER_SET_EDITING_ITEM, payload: todo }
}

export function updateItemAction(todo: Waiter) {
  return { type: ACTION_WAITER_UPDATE_ITEM, payload: todo }
}

export function createItemAction(waiter: Waiter) {
  return { type: ACTION_WAITER_CREATE_ITEM, payload: waiter }
}

export function removeItemAction(id: number) {
  return { type: ACTION_WAITER_REMOVE_ITEM, payload: id }
}
