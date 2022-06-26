import React from "react";

const TodoItem =() =>(
    <li>
        <input type = "checkbox"/>
        <span >Todo Item</span>
        <button type="button">
        수정
        </button>
        <button type="button">
        삭제
        </button>
    </li>
);

export default TodoItem;