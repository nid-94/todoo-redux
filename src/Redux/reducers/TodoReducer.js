// importation
import { ADD_TASK } from "./../actions/actionsType";
import { DELETE_TASK, EDIT_TASK, DONE_TASK } from "./../actions/actionsType";

// initialeState
const initialeState = {
    tasks: [
        { text: "task1", id: Math.random(), Done: false },
        { text: "task2", id: Math.random(), Done: false },
    ],
};

// pure function
const taskReducer = (state = initialeState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, payload] };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((el) => el.id !== payload),
            };
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map((el) =>
                    el.id == payload.id ? { ...el, text: payload.newTask } : el
                ),
            };
        case DONE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((el) => (el.id == payload ? { ...el, Done: !el.Done } : el)),
            };
        default:
            return state;
    }
};
export default taskReducer;
