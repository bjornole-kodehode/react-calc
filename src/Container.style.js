import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    justify-content: center;
    gap: 1em;
    grid-template-columns: repeat(4, 1fr);

    padding: 1.5em;
    background-color: hsl(223, 31%, 20%);
    border-radius: 10px;
    min-width: 300px;
    max-width: 500px;
    margin: 0 auto;
`