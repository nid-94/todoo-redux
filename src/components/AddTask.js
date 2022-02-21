import React from "react";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./../Redux/actions/actions";
import { Button } from "react-bootstrap";

function AddTask() {
    const dispatch = useDispatch();
    const addRef = useRef();
    const [addtext, setAddText] = useState("");
    const handleAdd = () => {
        dispatch(
            addTask({
                text: addtext,
                id: Math.random(),
                Done: false,
            })
        );
        //  addRef.current.value = "";
    };

    return (
        <div>
            <h1>add</h1>
            <input type="text" ref={addRef} onChange={(e) => setAddText(e.target.value)} />
            <Button onClick={() => dispatch(handleAdd())}>Add</Button>
        </div>
    );
}

export default AddTask;
