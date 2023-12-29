import { HighLight } from "../../comṕonents/Highlight";
import { Header } from "../../comṕonents/Header";
import { Container, Content, Icon } from "./styles";
import { FontAwesome } from '@expo/vector-icons';
import { Button } from "../../comṕonents/Button";
import { Input } from "../../comṕonents/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function NewGroup() {
    const navigation = useNavigation();

    const [group, setGroup ] = useState('');

    function handleNew() {
        // pode usar o popTop tbm.
        navigation.navigate('players', {group})
    }
    return (
        <Container>
            <Header showBackButton />
            <Content>
                <Icon>
                <FontAwesome name="users" size={56} color="#121214" />
                </Icon>
                <HighLight title="Nova turma" subtitle="Cria a turma para adicionar pessoas"/>
                
                <Input placeholder="Nome da turma"   onChangeText={setGroup} />

                <Button  style={{marginTop:20}}title="Criar"  onPress={handleNew}/>
            </Content>

        </Container>
    )
}