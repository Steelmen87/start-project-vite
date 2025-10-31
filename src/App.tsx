import './App.css'
import {HeaderMenu} from "./layout/header/Header.tsx";
import {Container} from "./layout/container/Container.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Portfolio} from "./layout/sections/portfolio/Portfolio.tsx";
import {Contacts} from "./layout/sections/contacts/Contacts.tsx";


function App() {
    return (
        <Container>
            <HeaderMenu/>
            <Main/>
            <AboutMe/>
            <Skills/>
            <Portfolio/>
            <Contacts/>
        </Container>
    )
}

export default App
