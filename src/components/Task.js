import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTask, doneTask } from "../Redux/actions/actions";
import Edit from "./Edit";

function Task({ todo }) {
    const dispatch = useDispatch();
    return (
        <div>
            <Container>
                <Row>
                    <Col>{todo.text}</Col>
                    <Col>
                        <div style={{ display: "flex" }}>
                            <Edit task={todo} />
                            <Button onClick={() => dispatch(doneTask(todo.id))}>
                                {todo.Done ? "undone" : "done"}
                            </Button>
                            <Button onClick={() => dispatch(deleteTask(todo.id))}>Delete</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Task;
