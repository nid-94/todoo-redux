import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTask } from "./../Redux/actions/actions";
function Edit({ task }) {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [newTask, setNewTask] = useState(task.text);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEdit = () => {
        dispatch(editTask(newTask, task.id));
        handleClose();
    };
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        type="email"
                        placeholder="type text"
                        value={newTask}
                        onChange={(event) => setNewTask(event.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleEdit()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Edit;
