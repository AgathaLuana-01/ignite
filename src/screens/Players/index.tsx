import { Header } from "@components/Header";

import { Container } from "./style";
import { Highligth } from "@components/Higthligth";

export function Players() {
    return (
        <Container>
            <Header showBackButton />
            <Highligth
                title="Nome da Turma"
                subtitle="Adcione a galera e separe os times"
            />
        </Container>
    );
}