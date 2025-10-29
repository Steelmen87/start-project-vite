import styled from "styled-components";
import {Description, FlexWrapperForAll, Title} from "../aboutMe/AboutMe.tsx";
import ps from "../../../assets/images/IMG_PORT/PS.jpg"
import ai from "../../../assets/images/IMG_PORT/AI.jpg"
import ae from "../../../assets/images/IMG_PORT/AE.jpg"
import figma from "../../../assets/images/IMG_PORT/figma0.png"
import black_star from "../../../assets/images/IMG_PORT/black_star.png"
import grey_star from "../../../assets/images/IMG_PORT/grey_star.png"

export const Skills = () => {
    const skills = [{
        image: ps,
        text: "Adobe Photoshop",
        countStars: [1, 1, 1, 1, 0]
    }, {
        image: ai,
        text: "Adobe Illustrator",
        countStars: [1, 1, 1, 0, 0]
    }, {
        image: ae,
        text: "Adobe After Effects",
        countStars: [1, 1, 0, 0, 0]
    }, {
        image: figma,
        text: "Figma",
        countStars: [1, 1, 1, 1, 0]
    },]
    return (
        <FlexWrapperForAll>
            <Title>Skills</Title>
            <DescriptionSkills>I work in such programs as</DescriptionSkills>
            <BlockSkills>
                {skills.map((skill, index) => <Skill key={index + "1"}>
                    <Img src={skill.image}/>
                    <Text>{skill.text}</Text>
                    <BlockStars padding={skill.text === "Figma" ? "20px" : "0"}>{skill.countStars.map((el, index) => {
                        return <Star key={index + 2} src={el === 1 ? black_star : grey_star}/>
                    })}</BlockStars>
                </Skill>)}
            </BlockSkills>
        </FlexWrapperForAll>
    );
};
const DescriptionSkills = styled(Description)`
    padding: 70px 0 84px 0;

`
type typeImg = {
    img?: string | undefined
}
const Img = styled.img<typeImg>`
    width: 90px;
    background-image: url(${props => props.img});

`
const BlockSkills = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const Skill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`
const Text = styled.div`
    width: 80px;
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    color: rgba(130, 130, 130, 1);
    padding: 20px 0 40px;
`
type typeStar = {
    star?: string | undefined
}
const Star = styled.img<typeStar>`
    width: 26px;
    background-image: url(${props => props.star});
`
type blockStars = {
    padding: string
}
const BlockStars = styled.div<blockStars>`
    display: flex;
    flex-direction: row;
    padding-top: ${props => props.padding};

    ${Star} + ${Star} {
        margin-left: 10px;
    }
`

