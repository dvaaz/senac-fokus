import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const pomodoro = [
  {
    id: "fokus",
    initialValue: 25,
    image: require('./foco.png'),
    display: "Foco",
  },
  {
    id: "short",
    initialValue: 5,
    image: require('./descanso_curto.png'),
    display: "Pausa curta",
  },
  {
    id: "long",
    initialValue: 45,
    image: require('./descanso_longo.png'),
        display: "Pausa curta",
  },
  
] 


export default function Index() {

const [timerType, setTimerType] = useState(pomodoro[1]) // timerType é o Hook e setTimerType é a função

  return (
    <View style={styles.container}>
      <Image source={timerType.image}/>
      <View style={styles.actions}>

        <View styles={styles.context}>          
          <Pressable style={styles.contextButtonActive}>
            <Text style={styles.contextButtonText}>{timerType.display}</Text>
          </Pressable>

        </View>

        <Text style={styles.timer}>{timerType.initialValue}</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </Pressable>

      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
          <br/> Desenvolvido por Aluno XxX.
          </Text>
      </View>
    </View>
  );
}

// criando uma variavel styles para criar 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40, // só pode ser utilizado o flex ou grid já tiver sido chamado (um elemento posicionador)
  },
  actions: {
    padding: 24,
    backgroundColor: '#14448080',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    alignItems: "center",
    width: '80%',
    gap: 32,
  },
  timer: {
    fontSize: 54,
    color: '#FFFFFF',
    fontWeight: "bold",
    textAlign: "center"
    
  },
  button: {
    padding: 8,
    backgroundColor: '#B872FF',
    borderRadius: 32,
  },
  buttonText: {
    fontSize: 18,
    color: '#021123',
    fontFamily: "Montserrat",
  },
  footer: {
    width: '80%',
  },
  footerText: {
    color: '#98A0A8',
    fontSize: 13,
    textAlign: "center",
  },
  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  contextButtonText: {
    colo: '#FFFF',
    fontSize: 12.5,
    padding: 8
  },
  contextButtonActive: {
    backgroundColor: '#144480',
    borderRadius: 8,

  }, 


})
  