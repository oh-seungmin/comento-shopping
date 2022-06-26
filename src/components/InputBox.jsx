import React from "react";

const InputBox = () =>(
    <div>
        <input
            type="text"
            name="todoItem"
            placeholder="할 일을 입력해주세요"
        />

        <button type="submit">
            추가

        </button>

    </div>
);

export default InputBox;