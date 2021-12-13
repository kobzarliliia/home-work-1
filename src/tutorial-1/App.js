import ClassProfile from "./components/ClassProfile";
import FunctionProfile from "./components/FunctionProfile";

function App() {
    return(
        <div>
            <ClassProfile name="Василий Давиденко" registredAt={(new Date(2021, 5, 22)).toLocaleDateString('ru-RU', { day:'numeric', month:'long', year:'numeric'})} />
            <FunctionProfile name="Георгий Тищенко" registredAt={(new Date(2021, 5, 22)).toLocaleDateString('ru-RU', { day:'numeric', month:'long', year:'numeric'})} />
        </div>
    );
}

export default App;