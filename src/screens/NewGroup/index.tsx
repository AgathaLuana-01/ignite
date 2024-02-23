import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { AppError } from '@utils/AppError';
import { groupCreate } from '@storage/group/groupCreat';
import { Alert } from 'react-native';

import { Container, Content, Icon } from './styles';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highligth } from '@components/Higthligth';


export function NewGroup() {
  const [group, setGroup] = useState('');
  const navigation = useNavigation();

  async function handleNew() {
    try {
      if(group.trim().length ===0){
        return Alert.alert('Novo Grupo', 'Informe o nome da turma');
      }
      await groupCreate(group);
      navigation.navigate('players', { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message);
      } else {
        Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.');
      }
      console.log(error);
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highligth
          title='Nova Turma'
          subtitle='Crie a turma para adcionar as pessoas' />
        <Input
          placeholder='Nome da Turma'
          onChangeText={setGroup}
        />
        <Button
          title='Criar'
          style={{ marginTop: 20 }}
          onPress={handleNew}
        />
      </Content>
    </Container>
  );
}