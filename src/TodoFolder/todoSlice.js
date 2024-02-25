import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{
        id: 'maeebjmnbewxidi',
        text: 'Pintu Sharma',
        email: 'abc@gmail.com',
        age: '24',
        city: 'surat',
        country: 'india'
    }]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setAddtodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload.text,
                email: action.payload.email,
                age: action.payload.age,
                city: action.payload.city,
                country: action.payload.country
            };
            state.todos.push(todo);
        },
        setRemovetodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        setUpdatetodo: (state, action) => {
            const { id, newText, newEmail, newAge, newCity, newCountry } = action.payload;
            const todoToUpdate = state.todos.find(todo => todo.id === id);
            if (todoToUpdate) {
                todoToUpdate.text = newText;
                todoToUpdate.email = newEmail;
                todoToUpdate.age = newAge;
                todoToUpdate.city = newCity;
                todoToUpdate.country = newCountry;
            }
        }
    }
});

export const { setAddtodo, setRemovetodo, setUpdatetodo } = todoSlice.actions;

export default todoSlice.reducer;
