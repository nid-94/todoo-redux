import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import Task from "./Task";

function ListTask() {
    const tasks = useSelector((state) => state.taskReducer.tasks);
    const [status, setStatus] = useState("all");
    console.log(tasks);
    return (
        <div>
            <h1>list</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button onClick={() => setStatus("all")}>ALL</Button>
                <Button onClick={() => setStatus("done")}>DONE</Button>
                <Button onClick={() => setStatus("undone")}>UNDONE</Button>
            </div>
            {status == "all"
                ? tasks.map((el) => <Task todo={el} key={el.id} />)
                : status == "done"
                ? tasks.filter((el) => el.Done).map((el) => <Task todo={el} key={el.id} />)
                : tasks.filter((el) => !el.Done).map((el) => <Task todo={el} key={el.id} />)}
        </div>
    );
}

export default ListTask;
