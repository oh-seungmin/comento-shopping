import React from "react";
import InputBox from "../components/InputBox";
import TodoItemList from "../components/TodoItemList";

const Home = () =>(
    <div className="homepage_container">
        <InputBox/>
        <TodoItemList/>
        <TodoItemList/>
        
    </div>
);

export default Home;