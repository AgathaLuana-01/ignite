import { Highligth } from '@components/Higthligth';
import { Container, Content, Icon } from './styles';
import { Header } from '@components/Header';
import { Button } from '@components/Button';

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon/>
        <Highligth
        title='Nova Turma'
        subtitle='Crie a turma para adcionar as pessoas'/>
        <Button
        title='Criar'/>
      </Content>
    </Container>
  );
}