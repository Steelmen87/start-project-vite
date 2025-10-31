import {Description, FlexWrapperForAll, Title} from "../aboutMe/AboutMe.tsx";
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";

export const Contacts = () => {
    const icons = ["codeLinkedIn","instagram","behance","dribble"]
    return (
        <FlexWrapperForAll>
            <Title>Contacts</Title>
            <Description maxWidth={"276px"}>
                Want to know more or just chat?
                You are welcome!
            </Description>
            <Button>Send message</Button>
            <BlocksIcon>
                {icons.map((icon,index) => <Icon key={index} iconId={icon}/>)}
            </BlocksIcon>
            <Text>
                Like me on LinkedIn,
                Instagram, Behance,
                Dribble
            </Text>
        </FlexWrapperForAll>
    );
};
const Button = styled.button`
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    text-align: center;
    padding: 13px 30px 13px 30px;
    border-radius: 30px;
    color: white;
    background: rgba(7, 7, 7, 1);
    margin: 30px 0 86px 0;
`
const BlocksIcon = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 342px;
    width: 100%;
`
const Text = styled.div`
    margin-top: 45px;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    text-align: center;
    width: 244px;
`