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
export const  StyledMe = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
`
export const Title = styled.div`
    font-weight: 400;
    font-size: 34px;
    line-height: 100%;
    text-align: center;
`
export const Description = styled.div`
    font-weight: 400;
    font-size: 18px;

    line-height: 1.5;
    letter-spacing: 0;
    text-align: center;
    max-width: 486px;


`
type FlexWrapperForAll = {
    flexDirection?:string
}
export const FlexWrapperForAll = styled(FlexWrapper)<FlexWrapperForAll>`
    //background-color: rgba(246, 246, 246, 1);
    display: flex;
   flex-direction: column;
    
    
    align-items: center;
    padding: 120px 0 100px 0;

    ${Title} {
        padding-bottom: 20px;
    }
`