import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./../Redux/actions/actions";
import { Button } from "react-bootstrap";

function AddTask() {
    const dispatch = useDispatch();
    const addRef = useRef();
    const handleAdd = () => {
        dispatch(
            addTask({
                text: addRef.current.value,
                id: Math.random(),
                Done: false,
            })
        );
        addRef.current.value = "";
    };
    console.log(addRef.current.value);
  
    return (
        <div>
            <h1>add</h1>
            <input type="text" ref={addRef} />
            <Button onClick={() => dispatch(handleAdd())}>Add</Button>
        </div>
    );
}

export default AddTask;
