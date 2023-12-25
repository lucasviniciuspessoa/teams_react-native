import { Container, Title } from "./styles";
import { Header } from "../../comṕonents/Header"
import { HighLight } from "../../comṕonents/Highlight";
import { GroupCard } from "../../comṕonents/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "../../comṕonents/ListEmpty";
import { Button } from "../../comṕonents/Button";

export function Groups() {

    const [groups, setGroups] = useState<string[]>([]);
    return (
        <Container>
          <Header />
          <HighLight title="Turmas"
           subtitle="jogue com a sua turma"/>
           
           <FlatList
            data={groups}
            keyExtractor={item => item}
            renderItem={({item}) =>  <GroupCard title={item}/>}
            contentContainerStyle={groups.length === 0 && {flex:1}}

            ListEmptyComponent={<ListEmpty message="Que tal cadastrar a primeira pessoa?"/>}
           
           />
          

            <Button title="Criar nova turma"/>
        </Container>
    )
}