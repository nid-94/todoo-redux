import "./App.css";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import Edit from "./components/Edit";

function App() {
    return (
        <div className="App">
            <h1>TO Do List</h1>
            <AddTask />
            <ListTask />
        </div>
    );
}

export default App;
