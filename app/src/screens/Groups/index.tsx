import { Container, Title } from "./styles";
import { Header } from "../../comṕonents/Header"
import { HighLight } from "../../comṕonents/Highlight";
import { GroupCard } from "../../comṕonents/GroupCard";
import { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "../../comṕonents/ListEmpty";
import { Button } from "../../comṕonents/Button";
import {useNavigation, useFocusEffect} from '@react-navigation/native'
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { groupGetAll } from "../../storage/group/groupGetAll";




export function Groups() {
    const [groups, setGroups] = useState<string[]>([]);

    const navigation = useNavigation();
    function handleNewGroup() {
        // navigation.navigate('new') nao precisa por o container navigation ja compartilha com as rotas o navigate

        navigation.navigate('new')

    }
    


    async function fetchGroups() {
        try {
          const data = await groupGetAll()
          setGroups(data);

        } catch(error) {
            console.log(error)
        }
    }

    function handleOpenGroup(group:string) {
        navigation.navigate("players", {group})
    }

    useFocusEffect(useCallback (()=> {
        fetchGroups()
    }, []))

    
    return (
        <Container>
          <Header />
          <HighLight title="Turmas"
           subtitle="jogue com a sua turma"/>
           
           <FlatList
            data={groups}
            keyExtractor={item => item}
            renderItem={({item}) =>  <GroupCard title={item}  onPress={() => handleOpenGroup(item)}/>}
            contentContainerStyle={groups.length === 0 && {flex:1}}

            ListEmptyComponent={<ListEmpty message="Que tal cadastrar a primeira pessoa?"/>}
           
           />
          

            <Button title="Criar nova turma"
                onPress={handleNewGroup}
            />
        </Container>
    )
}