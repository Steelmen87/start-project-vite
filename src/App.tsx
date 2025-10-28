import './App.css'
import {HeaderMenu} from "./layout/header/Header.tsx";
import {Container} from "./layout/container/Container.tsx";
import {Main} from "./layout/sections/main/Main.tsx";


function App() {
    return (
        <Container>
            <HeaderMenu/>
            <Main/>
        </Container>
    )
}

export default App
