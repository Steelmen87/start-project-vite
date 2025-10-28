import './App.css'
import {HeaderMenu} from "./layout/header/Header.tsx";
import {FlexWrapper} from "./layout/flexWraper/FlexWrapper.tsx";
import {Container} from "./layout/container/Container.tsx";


function App() {
    return (
        <Container>
            <FlexWrapper>
                <HeaderMenu/>
            </FlexWrapper>
        </Container>
    )
}

export default App
