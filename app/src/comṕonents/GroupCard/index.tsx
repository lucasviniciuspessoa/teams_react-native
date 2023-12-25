import { Container, Icon, Title } from "./styles";
import { FontAwesome } from '@expo/vector-icons';
import {TouchableOpacityProps} from 'react-native'
type Props =TouchableOpacityProps & {
    title:string;

}
export function GroupCard({title, ...rest}: Props) {

    return (
        <Container {...rest}>
            <FontAwesome name="users" size={24} color="#00875F"  />
            <Title style={{marginLeft: 20}}>
                {title}
            </Title>

        </Container>
    )
}