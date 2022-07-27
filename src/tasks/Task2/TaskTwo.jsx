import React, {useState, useReducer} from 'react';
import todoReducer from './todoReducer';

const TaskTwo = () =>
{
    const[todoValue, setTodoValue] = useState('');
    const[checked, setChecked] = useState(true);

    console.log(checked)

    const initialState = [
        {
            id: 1,
            todo: 'ReactJS Practice',
            isChecked: false
        }
    ];
    
    const [state, dispatch] = useReducer(todoReducer,initialState)

    const addTodo = () => dispatch({ type: 'ADD', todo: todoValue})

    const deleteTodo = (todoID) => dispatch({type: 'DELETE', id: todoID})

    const updateTodo = (todoID, todo) => 
    {
        let updatedTodo = prompt(`Enter a new Todo Value`, `${todo}`)
        dispatch({type: 'UPDATE', id: todoID, updatedTodo: updatedTodo})
        console.log(state);
    }

    console.log(state)
    return(
        <>
            <h1>ToDo List</h1>
            <hr/>
            <input value={todoValue} onChange={e => setTodoValue(e.target.value)}/>

            <button onClick={addTodo}>Add Todo</button>
            
            <br/><br/>
            <div>
                {
                    state.map((element, index) => 
                        <div key={index}>
                            <input type="checkbox" />
                            {element.todo + " "} 
                            <button onClick={() => updateTodo(index, element.todo)}>Edit</button>
                            <button onClick={() => deleteTodo(element.id)}>Delete</button>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default TaskTwo;