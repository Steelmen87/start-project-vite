import {StyledMe, Title} from "../aboutMe/AboutMe.tsx";
import styled from "styled-components";
import workOne from "../../../assets/images/work1.jpg"
import reebok_web from "../../../assets/images/reebok_web.png"
import cam from "../../../assets/images/photoCam.png"

export const Portfolio = () => {
    const works = [
        {
            img: workOne,
            description: "Online fashion store - Homepage"
        },
        {
            img: reebok_web,
            description: "Reebok Store - Concept"
        },
        {
            img: cam,
            description: "Braun Landing Page - Concept"
        },
    ]
    return (
        <StyledMe flexDirection={"column"}>
            <Title padding={"110px 0px 50px 0px"}>Portfolio</Title>
            {works.map((work, index) => {
                return <WorkProject key={index}>
                    <Image src={work.img}/>
                    <Description>
                        {work.description}
                    </Description>
                </WorkProject>
            })}
        </StyledMe>
    );
};

const WorkProject = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 940px;
    margin-bottom: 100px;
`
const Description = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    text-decoration: underline;
    text-decoration-style: solid;
    text-decoration-thickness: 0;
`

const Image = styled.img`
    object-fit: cover;
    
    max-width: 940px;
    height: 70vh;
    width: 100%;
    margin-bottom: 44px;
    @media screen and (max-width: 440px) {
        height: 21vh;
        max-width: 360px;
    }
`