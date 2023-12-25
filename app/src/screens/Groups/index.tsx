import { Container, Title } from "./styles";
import { Header } from "../../comṕonents/Header"
import { HighLight } from "../../comṕonents/Highlight";
import { GroupCard } from "../../comṕonents/GroupCard";

export function Groups() {
    return (
        <Container>
          <Header />
          <HighLight title="Turmas"
           subtitle="jogue com a sua turma"/>
           <GroupCard title="Galera Nova"/>

        </Container>
    )
}