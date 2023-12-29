import { HighLight } from "../../comṕonents/Highlight";
import { Header } from "../../comṕonents/Header";
import { Container, Content, Icon } from "./styles";
import { FontAwesome } from '@expo/vector-icons';
import { Button } from "../../comṕonents/Button";
import { Input } from "../../comṕonents/Input";
import { useNavigation } from "@react-navigation/native";

export function NewGroup() {
    const navigation = useNavigation();
    function handleNew() {
        // pode usar o popTop tbm.
        navigation.navigate('players', {group: "Novo"})
    }
    return (
        <Container>
            <Header showBackButton />
            <Content>
                <Icon>
                <FontAwesome name="users" size={56} color="#121214" />
                </Icon>
                <HighLight title="Nova turma" subtitle="Cria a turma para adicionar pessoas"/>
                
                <Input placeholder="Nome da turma"/>

                <Button  style={{marginTop:20}}title="Criar"  onPress={handleNew}/>
            </Content>

        </Container>
    )
}