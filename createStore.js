import { createStore } from "redux";
 
function todoReducer(state , action) {
    if (action.type == 'add_todo') {
        const todoText = action.payload.todoText
        return [
            ...state , 
            { text : todoText , 
                isFinished : false ,
                id : (state.length == 0) ?  1 : state[state.length -1].id + 1
            }
        ]
    }else if (action.type == 'delete_todo') {
        const todo = action.payload.todo
        return state.filter(t => t.id != todo.id)
    }
}
 
const response = createStore()