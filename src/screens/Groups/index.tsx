import { useState } from 'react';
import { FlatList } from 'react-native';
import { Header } from '@components/Header';
import { Highligth } from '@components/Higthligth';
import { GroupCard } from '@components/GroupCard';

import { Container } from './styles';

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera da Rocket', 'Amigos']);

  return (
    <Container>
      <Header />
      <Highligth
        title='Turmas'
        subtitle='Jogue com sua turma'
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard title={item}
          />
        )}
      />
    </Container>
  );
}

