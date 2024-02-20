import { Header } from '@components/Header';
import { Highligth } from '@components/Higthligth';
import { Container } from './styles';

export function Groups() {
  return (
    <Container>
     <Header/>
     <Highligth
     title='Turmas'
     subtitle='Jogue com sua turma'
     />
    </Container>
  );
}

