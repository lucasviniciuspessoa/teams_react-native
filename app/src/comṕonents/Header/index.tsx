import { BackButton, Container, Logo } from "./styles"
import logoImg from '../../assets/logo.png'
import { AntDesign } from '@expo/vector-icons';

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
    return (
        <Container>
            {showBackButton &&
                <BackButton>
                    <AntDesign name="left" size={32} color="#FFF" />
                </BackButton>
            }

            <Logo source={logoImg} />

        </Container>

    )
}