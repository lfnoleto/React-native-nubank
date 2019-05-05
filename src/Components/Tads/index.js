import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container,TadsContainer,TabItem,TabText } from './styles';

export default function Tads({translateY}) {
  
    return (
    
            <Container style={
                {
                    transform:[{
                        translateY: translateY.interpolate({
                            inputRange: [0,380],
                            outputRange: [0,30],
                            extrapolate:'clamp',
                        })
                    }]
                }
            }>

                <TadsContainer>
                    <TabItem>
                        <Icon name="person-add" size={24} color="#FFF"/>
                        <TabText>Indicar amigos</TabText>
                    </TabItem>

                    <TabItem>
                        <Icon name="chat-bubble-outline" size={24} color="#FFF"/>
                        <TabText>Cobrar</TabText>
                    </TabItem>

                    <TabItem>
                        <Icon name="arrow-downward" size={24} color="#FFF"/>
                        <TabText>Depositar</TabText>
                    </TabItem>
                    
                    <TabItem>
                        <Icon name="arrow-upward" size={24} color="#FFF"/>
                        <TabText>Transferir</TabText>
                    </TabItem>
                    <TabItem>
                        <Icon name="lock" size={24} color="#FFF"/>
                        <TabText>Bloquear cartão</TabText>
                    </TabItem>
                    
                </TadsContainer>
            </Container>
        
        );
  
}
