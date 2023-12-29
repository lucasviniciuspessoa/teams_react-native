import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`

flex: 1;
background-color: ${({theme}) => theme.COLORS.GRAY_600};
padding: 24px;
width: 100%;
height: 100%;
`

export const Title = styled.Text`
    color: #FFF;
    font-size: 32px;

`