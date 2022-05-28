import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface HeaderProps{
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }:HeaderProps){
   

    return(
        <Container>
            <Content>
            <img src={logoImg} alt="dtmoney" />
            <button type="button" onClick={ onOpenNewTransactionModal }>
                Nova transação
            </button>
           
            </Content>
        </Container>
    )
}