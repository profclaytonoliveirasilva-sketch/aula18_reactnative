import React,{useState, useEffect} from "react";
import {
    Alert,FlatList,KeyboardAvoidingView,Platform,SafeAreaView,
    ScrollView,Text,TextInput,TouchableOpacity,View,
} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";
import ClienteModel from "./models/Cliente";
import styles from './styles';

const CHAVE_STORAGE = '@clientes';

export default function Cliente(){
    const [nome,setNome] = useState('');
    const [cpf,setCpf] = useState('');
    const [email,setEmail] = useState('');
    const [telefone,setTelefone] = useState('');
    const [idade,setIdade] = useState('');
    const [sexo,setSexo] = useState('');
    const [clientes,setClientes] = useState<ClienteModel[]>([]);
    const [clienteEditando,setClienteEditando] = 
    useState<string | null>(null);

    useEffect(()=>{carregarClientes();},[]);

    async function carregarClientes() {
        try{
            const dados = await AsyncStorage.getItem(CHAVE_STORAGE);
            if (dados) {
                const lista = JSON.parse(dados);
                setClientes(lista);
            }
        }catch(erro){
            Alert.alert
            ('Erro','Não foi possível carregar os cliente');
        }
    }
    async function salvarClientes(lista:ClienteModel[]) {
        try{
            await AsyncStorage.setItem
            (CHAVE_STORAGE,JSON.stringify(lista));
            setClientes(lista);
        }catch(erro){
            Alert.alert('Erro',
                'Não foi possível salvar os dados');          
        }
    }

    function limparFormulario() {
        setNome('');
        setCpf('');
        setEmail('');
        setTelefone('');
        setIdade('');
        setSexo('');
        setClienteEditando(null);
    }

    async function cadastrar() {
        if(
            !nome || !cpf || !email || !telefone || !idade || !sexo
        ){
            Alert.alert('Atenção','Preencha todos os campos');
            return;
        }
        const novoCliente = new ClienteModel(
            Date.now().toString(),
            nome,cpf,email,telefone,Number(idade),sexo
        );
        const novaLista = [...clientes,novoCliente];
        await salvarClientes(novaLista);
        limparFormulario();
        Alert.alert('Sucesso','Cliente cadastrado com Sucesso!');
    }
    async function atualizar() {
        if (!nome || !cpf || !email || !telefone || !idade || !sexo){
            Alert.alert('Atenção','Preencher todos os campos!');
            return;
        }
        const novaLista = clientes.map((cliente)=>{
            if(cliente.id === clienteEditando){
                return new ClienteModel(cliente.id,nome,cpf,email,telefone,
                    Number(idade),sexo);
            }
            return cliente;
        });
        await salvarClientes(novaLista);
        limparFormulario();
        Alert.alert('Sucesso','Cliente atualizado com sucesso!');
    }
    function excluir(id:string) {
        Alert.alert('Excluir Cliente','Deseja realmente excluir este cliente?');
        [
            {
                text:'Cancelar',
                style:'Cancel',
            },
            {
                text:'Excluir',
                style:'destructive',
                onPress: async()=>{
                    const novaLista = clientes.filter((cliente)=>cliente.id !== id);
                    await salvarClientes(novaLista);
                    if(clienteEditando === id){
                        limparFormulario();
                    }
                    Alert.alert('Sucesso','Cliente excluído com sucesso!');
                }
            },
        ]
    }

    function editar(cliente:ClienteModel) {
        setNome(cliente.nome);
        setCpf(cliente.cpf);
        setEmail(cliente.email);
        setTelefone(cliente.telefone);
        setIdade(cliente.idade.toString());
        setSexo(cliente.sexo);
        setClienteEditando(cliente.id);
    }

    function formatarCPF(valor:string) {
        const numeros = valor.replace(/\D/g,'').slice(0,11);
        return numeros.replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2')
        .replace(/(\d{3})(\d{1,2})$/,'$1-$2');
    }
    function formatarTelefone(valor:string){
        const numeros = valor.replace(/\D/g,'').slice(0,11);
        if (numeros.length <= 10) {
            return numeros.replace(/(\d{2})(\d)/,'($1) $2').
            replace(/(\d{4})(\d)/,'$1-$2');
        }
         return numeros.replace(/(\d{2})(\d)/,'($1) $2').
            replace(/(\d{5})(\d)/,'$1-$2');
    }
    function renderCliente({item,}:{item:ClienteModel;}){
        return(
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>
                            {item.nome.charAt(0).toUpperCase()}
                        </Text>
                    </View>
                    <View style={styles.cardTitleArea}>
                        <Text style={styles.cardTitle}>
                            {item.nome}
                        </Text>
                        <Text style={styles.cardSubtitle}>
                            {item.sexo} - {item.idade} anos
                        </Text>
                    </View>
                </View>
                <View style={styles.infoArea}>
                    <Text style={styles.infoText}>
                        CPF: {item.cpf}
                    </Text>
                    <Text style={styles.infoText}>
                        E-mail: {item.email}
                    </Text>
                    <Text style={styles.infoText}>
                        Telefone: {item.telefone}
                    </Text>
                </View>
                <View style={styles.buttonsArea}>
                    <TouchableOpacity style={styles.editButton} 
                    onPress={()=>editar(item)}>
                        <Text style={styles.buttonText}>EDITAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton} 
                    onPress={()=>excluir(item.id)}>
                        <Text style={styles.buttonText}>EXCLUIR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container} 
            behavior={Platform.OS ==='ios' ? 'padding': undefined}>
                <ScrollView
                 showsVerticalScrollIndicator={false}
                 keyboardShouldPersistTaps="handled">

                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Cadastro de Clientes</Text>
                        <Text style={styles.headerSubtitle}>
                            CRUD com Armazenamento Local
                        </Text>
                    </View>
                    <View style={styles.formCard}>
            <Text style={styles.formTitle}>
              {clienteEditando  ? 'Editar Cliente' : 'Novo Cliente'}
            </Text>
            <Text style={styles.label}>Nome completo</Text>
            <TextInput style={styles.input}  placeholder="Digite o nome" placeholderTextColor="#9CA3AF"
              value={nome} onChangeText={setNome} />

            <Text style={styles.label}>CPF</Text>

            <TextInput style={styles.input} placeholder="000.000.000-00" placeholderTextColor="#9CA3AF"
              value={cpf} onChangeText={(texto) => setCpf(formatarCPF(texto))  }
              keyboardType="numeric" maxLength={14}
            />

            <Text style={styles.label}> E-mail</Text>

            <TextInput
              style={styles.input}
              placeholder="exemplo@email.com"
              placeholderTextColor="#9CA3AF"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text style={styles.label}>Telefone </Text>

            <TextInput
              style={styles.input}
              placeholder="(00) 00000-0000"
              placeholderTextColor="#9CA3AF"
              value={telefone}
              onChangeText={(texto) => setTelefone(formatarTelefone(texto))}
              keyboardType="phone-pad"
              maxLength={15}
            />

            <Text style={styles.label}> Idade </Text>

            <TextInput
              style={styles.input}
              placeholder="Digite a idade"
              placeholderTextColor="#9CA3AF"
              value={idade}
              onChangeText={setIdade}
              keyboardType="numeric"
              maxLength={3}
            />

            <Text style={styles.label}> Sexo </Text>

            <View style={styles.pickerContainer}>
              <Picker  selectedValue={sexo} onValueChange={(valor) => setSexo(valor) }
                style={styles.picker}>
                <Picker.Item label="Selecione o sexo"  value="" />
                <Picker.Item label="Masculino" value="Masculino"  />
                <Picker.Item label="Feminino"  value="Feminino" />
                <Picker.Item label="Outro" value="Outro"/>
                <Picker.Item label="Prefiro não informar" value="Prefiro não informar"/>
              </Picker>

            </View>

            <TouchableOpacity style={styles.saveButton} onPress={clienteEditando ? atualizar : cadastrar }>

              <Text style={styles.saveButtonText}>
                {clienteEditando  ? 'ATUALIZAR CLIENTE'  : 'CADASTRAR CLIENTE'}
              </Text>

            </TouchableOpacity>

            {clienteEditando && (

              <TouchableOpacity   style={styles.cancelButton} onPress={limparFormulario}>
                <Text  style={styles.cancelButtonText}>CANCELAR EDIÇÃO </Text>
              </TouchableOpacity>

            )}

          </View>

          {/* LISTA */}
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}> Clientes cadastrados</Text>
            <View style={styles.counter}>
              <Text style={styles.counterText}>{clientes.length}</Text>
            </View>
          </View>

          {clientes.length === 0 ? (

            <View style={styles.emptyBox}>
              <Text style={styles.emptyIcon}></Text>

              <Text style={styles.emptyTitle}> Nenhum cliente cadastrado</Text>

              <Text style={styles.emptyText}> Preencha o formulário acima
                para cadastrar o primeiro cliente.
              </Text>
            </View>

          ) : (

            <FlatList  data={clientes} keyExtractor={(item) => item.id  }
              renderItem={renderCliente}  scrollEnabled={false}
              contentContainerStyle={ styles.list } />

          )}

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Dados armazenados localmente
              no dispositivo
            </Text>

          </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}