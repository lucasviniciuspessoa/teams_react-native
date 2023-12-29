import { HighLight } from "../../comṕonents/Highlight";
import { Header } from "../../comṕonents/Header";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { ButtonIcon } from "../../comṕonents/ButtonIcon";
import { Input } from "../../comṕonents/Input";
import { FlatList, StyleSheet } from "react-native";
import { Filter } from "../../comṕonents/Filter";
import { useState } from "react";
import { PlayerCard } from "../../comṕonents/PlayerCard";
import { ListEmpty } from "../../comṕonents/ListEmpty";
import { Button } from "../../comṕonents/Button";
import { Route, useRoute } from "@react-navigation/native";


type RouteParams = {
    group:string;
}
export function Players() {

    const [team, setTeam] = useState("Time A");
    const [players, setPlayers] = useState([])
    const route = useRoute();
    const {group} = route.params as RouteParams;


    return (
        <Container>
            <Header showBackButton />
            <HighLight title={group} subtitle="adicione a galera e separe os times" />
            <Form>
                <Input
                    placeholder="Nome da pessoa"
                    autoCorrect={false}
                />

                <ButtonIcon
                    icon="add"
                />
            </Form>
            <HeaderList>

                <FlatList
                    data={["Time A", "Time B"]}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter title={item} isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />
                <NumbersOfPlayers>
                    {players.length}
                </NumbersOfPlayers>
            </HeaderList>

            <FlatList data={players}
            
                        keyExtractor={item=>item}
                        renderItem={({item}) => (
                            <PlayerCard name={item} onRemove={()=> {}}/>
                        )}
                        ListEmptyComponent={<ListEmpty message="Não existe participantes ainda"/>}
                            showsVerticalScrollIndicator={false}


                            contentContainerStyle={
                                [
                                    {paddingBottom:100},
                                    players.length === 0 && {flex:1}
                                ]
                            }
            />

            <Button title="Remover turma" type="SECONDARY"/>

        </Container>


    )
}


const styles = StyleSheet.create({
    absoluteIcon: {
        position: 'absolute',
        right: 10, // Adjust position as needed
        top: 5, // Adjust position as needed
    },
});