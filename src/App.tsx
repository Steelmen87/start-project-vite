import './App.css'
import {HeaderMenu} from "./layout/header/Header.tsx";
import {Container} from "./layout/container/Container.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";


function App() {
    return (
        <Container>
            <HeaderMenu/>
            <Main/>
            <AboutMe/>
            <Skills/>
        </Container>
    )
}

export default App
