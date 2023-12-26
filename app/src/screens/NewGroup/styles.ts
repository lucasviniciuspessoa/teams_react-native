import styled from "styled-components/native";



export const Container = styled.View `
width: 100%;
height: 100%;

    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    padding: 24px;

`

export const Content = styled.View`

    flex: 1;
    justify-content: center;

`
export const Icon = styled.View`
    align-self: center;
`