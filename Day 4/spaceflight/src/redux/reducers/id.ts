interface State {
    id: number
}

type Action = {
    type: string
    payload: number
}

const initialState: State = {
    id: 0
}

function idReducer(state: State = initialState, action: Action) {
    switch(action.type) {
        case 'ADD_ID':
            return {id: action.payload}
        default:
            return state    
    }

}

export default idReducer