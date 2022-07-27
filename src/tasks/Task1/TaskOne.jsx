import React, {useState} from 'react';

const TaskOne = () =>
{
    const[value, setValue] = useState("");
    const[count, setCount] = useState(0);

    const handleChange = (e) =>
    {
        setValue(e.target.value);
        setCount(count+1);
    }

    return(
        <>
            <h1>Task One</h1>
            <hr/>
            <input type="text" value={value} onChange={handleChange} />
            <h3>Component Renders: {count}</h3>
        </>
    )
}

export default TaskOne;