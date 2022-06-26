import React from "react";
import Todoitem from "../components/TodoItem";

const TodoItemList = () =>(
    <div >
        <p>Todo</p>
        <ul>
            <Todoitem/>
            <Todoitem/>
            <Todoitem/>
        </ul>
    </div>
);

export default TodoItemList;