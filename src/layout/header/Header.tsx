import styled from "styled-components";

export const HeaderMenu = () => {
    return (
        <Header>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
                <BorderDiv/>
            </nav>
        </Header>
    );
};
const Header = styled.header`
    max-width: 940px;

    nav {
        width: 100%;
    }

    ul {
        display: flex;
        justify-content: space-between;
        padding-left: 0;
        list-style: none;
    }

    nav > ul > li > a {
        text-decoration: none;
        color: rgba(130, 130, 130, 1);
        font-weight: 400;
        font-size: 18px;
    }
`
const BorderDiv = styled.div`
    margin-top: 30px;
    border-bottom: 1px solid rgba(130, 130, 130, 1);
`