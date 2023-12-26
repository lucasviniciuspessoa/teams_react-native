import { HighLight } from "../../comṕonents/Highlight";
import { Header } from "../../comṕonents/Header";
import { Container, Content, Icon } from "./styles";
import { FontAwesome } from '@expo/vector-icons';
import { Button } from "../../comṕonents/Button";
import { Input } from "../../comṕonents/Input";

export function NewGroup() {
    return (
        <Container>
            <Header showBackButton />
            <Content>
                <Icon>
                <FontAwesome name="users" size={56} color="#121214" />
                </Icon>
                <HighLight title="Nova turma" subtitle="Cria a turma para adicionar pessoas"/>
                <Input/>
                <Button  style={{marginTop:20}}title="Criar"/>
            </Content>

        </Container>
    )
}