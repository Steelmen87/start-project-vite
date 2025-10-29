import styled from "styled-components";
import { StyledMe} from "../sections/aboutMe/AboutMe.tsx";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    
    ${StyledMe} {
        background: rgba(246, 246, 246, 1);

    }
`