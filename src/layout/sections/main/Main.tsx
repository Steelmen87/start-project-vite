import {FlexWrapper} from "../../flexWraper/FlexWrapper.tsx";
import styled from "styled-components";
import image from "./../../../assets/images/IMG_PORT/photo_main.png"
export const Main = () => {
    return (
        <FlexWrapper>
            <Text>
                <FIO>
                    Denis Novik
                </FIO>
                <Content>
                    UX | UI developer 24 years old, Usa
                </Content>
                <Language>
                    RU | ENG
                </Language>
            </Text>
            <Photo src={image}/>
        </FlexWrapper>
    );
};
const Language = styled.div`
    font-weight: 400;
    font-size: 18px;
    writing-mode: vertical-lr;
    transform: rotate(-180deg);
    text-orientation: mixed;
`
const Text = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0;
`
const FIO = styled.div`
    width: 124px;
    font-weight: 400;
    font-size: 48px;
    color:rgba(7, 7, 7, 1);

    line-height: 100%;
    letter-spacing: 0%;

`
const Content = styled.div`
    width: 154px; 
    font-weight: 400;
    font-size: 18px; 
    line-height: 100%;
    letter-spacing: 0%;

`


const Photo = styled.img`
    object-fit: cover;
    height: 387px;
    width: 100%;
    max-width: 944px;
    margin-bottom: 100px;
    


`

