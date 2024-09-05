import { ADD_ID, AddId } from "../actions/actions"

interface State {
    id: string | undefined
}



const initialState: State = {
    id: ''
}

function idReducer(state: State = initialState, action: AddId) {
    switch(action.type) {
        case ADD_ID:
            return {id: action.payload}
        default:
            return state    
    }

}

export default idReducer