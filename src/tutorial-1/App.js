import ClassProfile from "./components/ClassProfile";
import FunctionProfile from "./components/FunctionProfile";

function App() {
    return(
        <div>
            <ClassProfile name="Василий" registredAt={(new Date(2021, 5, 22)).toLocaleDateString()} />
            <FunctionProfile name="Василий" registredAt={(new Date(2021, 5, 22)).toLocaleDateString()} />
        </div>
    );
}

export default App;