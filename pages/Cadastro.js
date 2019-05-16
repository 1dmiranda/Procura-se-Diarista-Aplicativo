import React from 'react';
import { View, Button, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import axios from 'axios';


export default class Cadastro extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            nome:'',
            cpf:'',
            nascimento:'',
            celular:'',
            email:'',
            senha:'',
            confirmasenha:'',
        }
    }

    alteraCampo(campos, value){
        this.setState({
            [campos]:value
        });
    }

    login(){
        console.log(this.state);
    }
    
    render(){
        return(
            <ScrollView>
                <View style={styles.form}>
                    <TextInput style={styles.input1} 
                        placeholder="Nome Completo"
                        value={this.state.nome}
                        onChangeText={value => this.alteraCampo('nome',value)}
                        />
                    <TextInput style={styles.input}
                        placeholder="CPF"
                        value={this.state.cpf}
                        onChangeText={value => this.alteraCampo('cpf',value)}
                        />
                    <TextInput style={styles.input} 
                        placeholder="Data de Nascimento"
                        value={this.state.nascimento}
                        onChangeText={value => this.alteraCampo('nascimento',value)}
                        />
                    <TextInput style={styles.input}
                        placeholder="Celular"
                        value={this.state.celular}
                        onChangeText={value => this.alteraCampo('celular',value)}
                        />
                    <TextInput style={styles.input}
                        placeholder="Email"
                        value={this.state.email}
                        onChangeText={value => this.alteraCampo('email',value)}
                        />
                    <TextInput style={styles.input}
                        placeholder="Senha"
                        secureTextEntry
                        value={this.state.senha}
                        onChangeText={value => this.alteraCampo('senha',value)}
                        />
                    <TextInput style={styles.input}
                        placeholder="Confirmar Senha"
                        secureTextEntry
                        value={this.state.confirmasenha}
                        onChangeText={value => this.alteraCampo('confirmasenha',value)}
                        />
                </View>
                <View style={styles.botao}>
                    <Button title="Cadastrar" color="#00BFFF"  onPress={()=>this.login()}/>
                </View>
            </ScrollView>
        )
    }
    
}

const styles = StyleSheet.create({
    form:{
        paddingLeft:30,
        paddingRight:30,
    },
    input1:{
        height:50,
        borderBottomWidth:2,
        borderBottomColor:'#7B68EE',
        marginTop:40,
    },
    input:{
        height:50,
        borderBottomWidth:2,
        borderBottomColor:'#7B68EE',
        marginTop:10,
    },
    botao: {
        marginTop:15,
        paddingLeft:30,
        paddingRight:30,
    },
});
