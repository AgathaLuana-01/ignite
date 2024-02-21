import { Header } from "@components/Header";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from '@components/Filter'

import { Container, Form } from "./style";
import { Highligth } from "@components/Higthligth";

export function Players() {
    return (
        <Container>
            <Header showBackButton />
            <Highligth
                title="Nome da Turma"
                subtitle="Adcione a galera e separe os times"
            />
            <Form>
                <Input
                    placeholder="Nome da Pessoa"
                    autoCorrect={false}
                />
                <ButtonIcon icon='add' />
            </Form>
            <Filter
                title="Time A"
                isActive
            />
        </Container>
    );
}