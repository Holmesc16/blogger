import styled from 'styled-components'

export const Button = styled.button`
    background-color:${props => props.color || "palevioletred"};
    color:white;
    padding:9px;
    border:none;
    margin:0 3px;
    border-radius: 5px;
    `
