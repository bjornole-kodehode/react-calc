import styled from "styled-components"

import Button from "../Button";


export const StyledButton = styled(Button)`
    border: none;
    
    background-color: hsl(30, 25%, 89%);
    border-radius: 5px;
    box-shadow: 0 5px hsl(28, 16%, 65%);
    color: hsl(221, 14%, 31%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: 700;
    padding: 1rem;
    
    
    ${props => props.value === 'RESET' && 'grid-column: 1 / span 2;'}
    ${props => props.value === '=' && 'grid-column: 3 / span 2;'}
    
    ${props => props.value === 'RESET' && 'background-color: hsl(225, 21%, 49%);'}
    ${props => props.value === 'RESET' && 'box-shadow: 0 5px hsl(224, 28%, 35%);'}
    ${props => props.value === 'RESET' && 'color: #fff;'}
    ${props => props.value === 'RESET' && 'font-size: 1rem;'}
    ${props => props.value === 'RESET' && 'font-weight: 700;'}
    
    ${props => props.value === '=' && 'background-color: hsl(6, 63%, 50%);'}
    ${props => props.value === '=' && 'box-shadow: 0 5px hsl(6, 70%, 34%);'}
    ${props => props.value === '=' && 'color: #fff;'}
    ${props => props.value === '=' && 'font-size: 1rem;'}
    ${props => props.value === '=' && 'font-weight: 700;'}


    ${props => props.value === 'DEL' && 'background-color: hsl(225, 21%, 49%);'}
    ${props => props.value === 'DEL' && 'box-shadow: 0 5px hsl(224, 28%, 35%);'}
    ${props => props.value === 'DEL' && 'color: #fff;'}
    ${props => props.value === 'DEL' && 'font-size: 1rem;'}
    ${props => props.value === 'DEL' && 'font-weight: 700;'}
`