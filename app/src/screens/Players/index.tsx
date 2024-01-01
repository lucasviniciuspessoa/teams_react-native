import { HighLight } from "../../comṕonents/Highlight";
import { Header } from "../../comṕonents/Header";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { ButtonIcon } from "../../comṕonents/ButtonIcon";
import { Input } from "../../comṕonents/Input";
import { Alert, FlatList, StyleSheet } from "react-native";
import { Filter } from "../../comṕonents/Filter";
import { useEffect, useRef, useState } from "react";
import {TextInput} from 'react-native'
import { PlayerCard } from "../../comṕonents/PlayerCard";
import { ListEmpty } from "../../comṕonents/ListEmpty";
import { Button } from "../../comṕonents/Button";
import { Route, useRoute } from "@react-navigation/native";
import { AppError } from "../../utils/AppError";
import { playerAddByGroup } from "../../storage/player/playerAddByGroup";
import { playersGetByGroup } from "../../storage/player/playersGetByGroup";
import { playersGetByGroupTeam } from "../../storage/player/playerAddByGroupTeam";
import { PlayerStorageDTO } from "../../storage/player/PlayerStorageDTO";


type RouteParams = {
    group:string;
}
export function Players() {
    const [newPlayerName, setNewPlayerName] = useState("")
    const [team, setTeam] = useState("Time A");
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
    const route = useRoute();
    const {group} = route.params as RouteParams;
    const newPlayerNameInputRef = useRef<TextInput>(null)

    async function handleAddPlayer() {
        if(newPlayerName.trim().length === 0) {
            return Alert.alert("Nova pessoa", "Informe o nome da pessoa para adicionar")
        }
        const newPlayer =  {
            name: newPlayerName,
            team,
        }
        try {
            await playerAddByGroup(newPlayer, group);
            newPlayerNameInputRef.current?.blur()
            setNewPlayerName("")
            fetchPlayersByTeam()

        } catch(error) {
            if(error instanceof AppError) {
                Alert.alert("Nova pessoa", error.message)
            }else {
                console.log(error)
                Alert.alert("Nova pessoa", "Não foi possível adicionar")
            }
        }
    }


    async function fetchPlayersByTeam() {
        try {
          const playersByTeam = await playersGetByGroupTeam(group, team);
          setPlayers(playersByTeam)
        } catch (error) {
          console.log(error);
          Alert.alert('Pessoas', 'Não foi possível carregar as pessoas do time selecionado.');
        }
      }
    
 

      useEffect(() => {
        fetchPlayersByTeam();
      },[team])
    

    return (
        <Container>
            <Header showBackButton />
            <HighLight title={group} subtitle="adicione a galera e separe os times" />
            <Form>
                <Input
                onSubmitEditing={handleAddPlayer}
                returnKeyType="done"
                    inputRef={newPlayerNameInputRef}
                    placeholder="Nome da pessoa"
                    autoCorrect={false}
                    onChangeText={setNewPlayerName}
                    value={newPlayerName}
                />

                <ButtonIcon
                    icon="add" onPress={handleAddPlayer}
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
            
                        keyExtractor={item=>item.name}
                        renderItem={({item}) => (
                            <PlayerCard name={item.name} onRemove={()=> {}}/>
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