import styled from "styled-components";

export const HeaderTag = styled.header`
    background-color: #000000;
    background: linear-gradient(90deg, #011604 40%, #034912 100%);
    color: white;
    display: flex;
    font-family: sans-serif;
    justify-content: flex-end;
    padding: 0 2rem;
    box-sizing: border-box;
`;

export const OptionsStyle = styled.ul`
    font-size: 1rem;
    display: flex;
    cursor: pointer;
    list-style: none;
`;

export const OptionStyle = styled.li`
    display: flex;
    align-items: center;
    padding-inline: 5%;
    a {
        color: inherit;
        text-decoration: none;
    }
`;
