import {FlexWrapper} from "../../flexWraper/FlexWrapper.tsx";
import styled from "styled-components";

export const AboutMe = () => {
    return (
        <StyledMe>
            <FlexWrapperForAll>
                <Title>AboutMe</Title>
                <Description>
                    <p>Hi, I'm Denis – UX/UI designer from Minsk.
                        I'm interested in design and everything connected with it.</p>

                    <p>I'm studying at courses "Web and mobile design
                        interfaces" in IT-Academy.</p>

                    <p>Ready to implement excellent projects
                        with wonderful people.</p>
                </Description>
            </FlexWrapperForAll>
        </StyledMe>
    );
};
type StyledMeType = {
    flexDirection?: string
}
export const StyledMe = styled.div<StyledMeType>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    flex-direction: ${props => props.flexDirection || "row"};
`
type TitleProps = {
    padding?: string
}
export const Title = styled.div<TitleProps>`
    font-weight: 400;
    font-size: 34px;
    line-height: 100%;
    text-align: center;
    padding: ${props => props.padding};
`
type DescriptionProps = {
    maxWidth?: string
}
export const Description = styled.div<DescriptionProps>`
    font-weight: 400;
    font-size: 18px;

    line-height: 1.5;
    letter-spacing: 0;
    text-align: center;
    max-width: ${props => props.maxWidth || "486px"};
    @media screen and (max-width: 440px) {
        font-size: 14px;
        max-width:382px;
    }

`
type FlexWrapperForAll = {
    flexDirection?: string
    wrap?: string
}
export const FlexWrapperForAll = styled(FlexWrapper)<FlexWrapperForAll>`
    //background-color: rgba(246, 246, 246, 1);
    display: flex;
    flex-direction: column;
    flex-wrap: ${props => props.wrap || "nowrap"};

    align-items: center;
    padding: 120px 0 100px 0;

    ${Title} {
        padding-bottom: 20px;
    }
`