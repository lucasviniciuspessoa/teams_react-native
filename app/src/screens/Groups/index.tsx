import { Container, Title } from "./styles";
import { Header } from "../../comṕonents/Header"
import { HighLight } from "../../comṕonents/Highlight";
import { GroupCard } from "../../comṕonents/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "../../comṕonents/ListEmpty";
import { Button } from "../../comṕonents/Button";
import {useNavigation} from '@react-navigation/native'
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


type RootParamList = {
    groups: undefined;
    new: undefined;
    players: {
        group: string;
    }
}

type Props = {
    navigation: NativeStackNavigationProp<RootParamList, 'groups'>;
}
export function Groups({navigation}: Props) {
    const [groups, setGroups] = useState<string[]>([]);

    // const navigation = useNavigation();
    function handleNewGroup() {
        // navigation.navigate('new') nao precisa por o container navigation ja compartilha com as rotas o navigate

        navigation.navigate('new')

    }

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
          

            <Button title="Criar nova turma"
                onPress={handleNewGroup}
            />
        </Container>
    )
}