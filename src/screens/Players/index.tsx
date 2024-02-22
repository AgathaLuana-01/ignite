import { Header } from "@components/Header";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from '@components/Filter'

import { Container, Form, HeaderList, NumbersOfPlayers } from "./style";
import { Highligth } from "@components/Higthligth";
import { FlatList } from "react-native";
import { useState } from "react";

export function Players() {
    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState([]);
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

            <HeaderList>
                <FlatList
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />
                <NumbersOfPlayers>
                    {players.length}
                </NumbersOfPlayers>
            </HeaderList>


        </Container>
    );
}