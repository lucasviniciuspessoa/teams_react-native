import { HighLight } from "../../comṕonents/Highlight";
import { Header } from "../../comṕonents/Header";
import { Container, Content, Icon } from "./styles";
import { FontAwesome } from '@expo/vector-icons';
import { Button } from "../../comṕonents/Button";
import { Input } from "../../comṕonents/Input";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { groupCreate } from "../../storage/group/groupCreate";
import { groupGetAll } from "../../storage/group/groupGetAll";

export function NewGroup() {
    
    const [group, setGroup ] = useState('');
    const navigation = useNavigation();

    async function handleNew() {
       try {
        await groupCreate(group)
        navigation.navigate('players', {group})
       } catch(error) 
       {
        console.log(error)
       }
        // pode usar o popTop tbm.
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