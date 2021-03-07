import styled from 'styled-components';

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 15px;
    justify-content: flex-start;
    background-color: #fff;
`;
export const TitleInput = styled.Text`
    padding-top: 1px;
    color: #111;
    font-size: 18px;
`;

export const InputForm = styled.TextInput`
    background-color: #fff;
    width: 100%;
    margin-bottom: 15px;
    font-size: 18px;
    color: #222;
    border: #171941 1px;
    border-radius:7px;
    padding: 10px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
    background-color: #050c3d;
    width: 100%;
    height: 45px;

    border-radius: 7px;

    align-items: center;
    justify-content:center;

    
    
`;

export const TextSubmitForm = styled.Text`
    color: #00a1fc;
    font-size: 22px;
    
`;

export const LoadingArea = styled.View`
   position: absolute;
   top: 0;
   left: 0 ;
   right:0;
   bottom:0;
   background-color: rgba(0,0,0,0.6);
   align-items: center;
   justify-content: center;
    
`