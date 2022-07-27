const todoReducer = (state, action) =>
{
    switch(action.type)
    {
        case 'ADD':
        return [
            ...state, 
            {id: state.length+1, todo: action.todo, isChecked: false}
        ];

        case 'DELETE':
        return state.filter( element => element.id !== action.id );

        case 'UPDATE':
        state[action.id].todo = action.updatedTodo;
        return [...state];

        default:
        return state;
    }
}

export default todoReducer;