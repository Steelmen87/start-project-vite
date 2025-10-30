import './App.css'
import {HeaderMenu} from "./layout/header/Header.tsx";
import {Container} from "./layout/container/Container.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Portfolio} from "./layout/sections/portfolio/Portfolio.tsx";


function App() {
    return (
        <Container>
            <HeaderMenu/>
            <Main/>
            <AboutMe/>
            <Skills/>
            <Portfolio/>
        </Container>
    )
}

export default App
