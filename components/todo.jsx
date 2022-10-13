import React, {useState} from 'react'

const AddTask = ({addTask}) => {
    const[value, updateValue] = useState('')

    const handleSubmit = event =>{
        event.preventDefault()
        if(value !== ''){
            addTask(value)
            updateValue('')
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={value}
                placeholder='Enter the Todo list...!!'
                onChange={event => updateValue(event.target.value)}/>

            <button type='submit'><i class='metarial-icons'>add</i></button>
        </form>
    )
}

const Todo = () => {
    const addTask = text => updateTask([...task,{text}])
    const [task, updateTask] = useState([
        
    ])

    const toggleTask = index => {
        const newTask = [...task]
        if(newTask[index].isCompleted){
            newTask[index].isCompleted = false
        }else{
            newTask[index].isCompleted = true
        }
        updateTask(newTask)
    }

    const removeTask = index =>{
        const newTask = [...task]
        newTask.splice(index,1)
        updateTask(newTask)
    }

    return(
        <div className='todo-list'>
            <h1>Think To-Do </h1>
            <AddTask addTask={addTask} />
            {task.map((todo, index) => (
                <div className='task-status'>
                    <span onClick={() => toggleTask(index)} className={todo.isCompleted? 'task-name completed-task' : 'task-name'}>
                        {todo.text}
                    </span>
                    <button className='delect-btn' onClick={() => removeTask(index)}> <i class='metarial-icons'>delect</i></button>
                </div>
            ))} 
        </div>
    )
}

export default Todo