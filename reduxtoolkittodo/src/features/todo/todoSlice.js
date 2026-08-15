import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [{id: 1, 
        text: "hello world"
    }]
}

//slice == reducers big version

export const todoSlice = createSlice({
    // name of slices, use proper names will be visible in chrome redux toolkit extenstion
    name: 'todo',
    initialState,
    reducers:{
        //consists of properties and functions
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), //auto id generation unique ones! instead od date.now()
                text: action.payload // payload is an object, it is itself some text
            }
            state.todos.push(todo) //state pushing  object -> property add, array -> push
        },
        //state -> current state, action ->  action gives some values, data being passed
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.
            id !== action.payload)
        },

    }
})

// we have to export 2 parts 

//functionality export
export const  {addTodo, removeTodo} = todoSlice.actions

//store ko b functionality/ reducers ka list chiye
export default todoSlice.reducer