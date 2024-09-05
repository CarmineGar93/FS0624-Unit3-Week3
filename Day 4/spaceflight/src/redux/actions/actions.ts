export const ADD_ID = 'ADD_ID'

export interface AddId {
    type: string
    payload: string | undefined
}

export function AddIdAction(id: string | undefined): AddId {
    return {
        type: ADD_ID,
        payload: id
    }
}