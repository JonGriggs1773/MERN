

import {useState} from 'react'
import styles from '../css/todo.module.css'


const Todos = (props) => {
    const [todoList, setTodoList] = useState([]);
    const [todo, setTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let todoToAdd = {
            todo: todo,
            done: false
        }
        setTodoList([...todoList, todoToAdd]);
        setTodo('')
    }

    const changeBool = (thing) => {
        thing.done = !thing.done
        console.log(thing.done)
        let newList = todoList.filter(todo => todo.done === false)
        setTodoList(newList);
        console.log(todoList);
    }


    return (
        <div className = {styles.list}>
            <h3>Todo List:</h3>
            <form onSubmit = {handleSubmit}>
                <label>
                    What is your task:
                    <input name = "todo" type = "text" onChange = {(e) => {setTodo(e.target.value)}} value = {todo}/>
                </label>
                <div>
                    <input className = {styles.btn} type = "submit" value = "Add Todo"/>
                </div>
            </form>
            <div>
                <ol className = {styles.allTodos}>
                {
                    todoList.map((item, index) => {
                        return(
                            <li key = {index}> {item.todo} <input type = 'button' className = {styles.btn} value = "Completed" onClick = {() => changeBool(item)}/></li>
                            )})}
                </ol>
            </div>
        </div>
    )
}

export default Todos