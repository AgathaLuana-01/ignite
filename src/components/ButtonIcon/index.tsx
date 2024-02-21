import { TouchableOpacityProps } from 'react-native';

import { Container, Icon } from './style';

type Props = TouchableOpacityProps & {

}

export function ButtonIcon({} : Props) {
    return (
        <Container>
            <Icon name='home' type='SECONDARY' />

        </Container>
    )
}