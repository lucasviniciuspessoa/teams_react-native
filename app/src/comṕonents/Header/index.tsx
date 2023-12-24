import { Container, Logo } from "./styles"
import logoImg from '../../assets/logo.png'  
import { Text } from "react-native"
export function Header() {
    return (
        <Container>
            <Logo source={logoImg}/>
        </Container>
        
    )
}