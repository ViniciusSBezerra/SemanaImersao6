import  React, {useState} from 'react';

import { ScrollView} from 'react-native-gesture-handler'

import { Container, TitleInput, InputForm, ButtonSubmit, TextSubmitForm, LoadingArea } from './styles'
import { ActivityIndicator, Alert } from 'react-native';

import connectionApi  from '../../config/connectionApi'

export default function Orcamento(){

    const [_id] = useState()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)

    const send = async () =>{

        setLoading(true);
        

        await connectionApi.post('/orcamento', {
            name,
            email, 
            whatsapp, 
            description,
        }).then((response) => {
            // console.log(response.data)
            Alert.alert("", response.data.message);
            setLoading(false)
        }).catch((err)=>{
            if(err.response){
                Alert.alert("", response.data.message);
                setLoading(false)
            }else{
                Alert.alert("", "Erro: Orçamento não enviado com sucesso!")
                setLoading(false)
            }
        })
        
    }
    return(

        <ScrollView contentContainerStyle = {{flexGrow: 1}}>
            <Container>
            <TitleInput>Nome: </TitleInput>
            <InputForm placeholder="Digite seu nome!" autoCorrect={false} value={name} onChangeText= {text => setName(text)} />

            <TitleInput>E-mail: </TitleInput>
            <InputForm placeholder="Digite seu email!" autoCorrect={false} keyboardType="email-address" autoCapitalize="none" value={email} onChangeText= {text => setEmail(text)} />

            <TitleInput>WhatsApp: </TitleInput>
            <InputForm placeholder="(11) 90000-0000" autoCorrect={false} value={whatsapp} onChangeText= {text => setWhatsapp(text)} />

            <TitleInput>Descrição: </TitleInput>
            <InputForm placeholder="Digite a descrição de seu projeto" autoCorrect={false} value={description} onChangeText= {text => setDescription(text)} />

            <ButtonSubmit disable={loading} onPress={send}>
                <TextSubmitForm>Enviar</TextSubmitForm>
            </ButtonSubmit>

            
            {loading &&
                <LoadingArea>
                    <ActivityIndicator size="large" color="#fff"/>
                        
                   
                </LoadingArea>
            }

        </Container>
        </ScrollView>
        
    );
}
