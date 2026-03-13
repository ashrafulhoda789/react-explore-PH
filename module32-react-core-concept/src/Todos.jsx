import { use } from "react"
import Todo from "./Todo";

export default function Todos({todosPromise}){
    const todos = use(todosPromise);
    return(
        <div className="borderedCard">
            <h2>All Todos</h2>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo}></Todo>)
            }
            
        </div>
    )
}