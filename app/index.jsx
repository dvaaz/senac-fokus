import { useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ActionButton } from "../components/ActionButton";
import { FokusButton } from "../components/FokusButton";
import { TimerDisplay } from "../components/TimerDisplay";

const pomodoro = [
  {
    id: "fokus",
    initialValue: 2500,
    image: require('./foco.png'),
    display: "Foco",
  },
  {
    id: "short",
    initialValue: 500,
    image: require('./descanso_curto.png'),
    display: "Pausa curta",
  },
  {
    id: "long",
    initialValue: 4500,
    image: require('./descanso_longo.png'),
        display: "Pausa longa",
  },
  
] 

export default function Index() {

const [timerType, setTimerType] = useState(pomodoro[0]) // timerType é o Hook e setTimerType é a função
const timerRef = useRef(null) /** Hook sincrono do react */

const toogleTimer = () => { /**Função da lógica do botão começar | pausar */
  
  if(timerRef.current) {
  // pausar
    clearInterval(timerRef.current);
  return;
  }
  /** setInterval é uma função do js PURO, espera uma função e o tempo que será executado (por padrão em milisegundos) */  
  const id = setInterval(() => {console.log("timer funcionando"), 1000}) ;
  timerRef.current =id;
  }

  return (
    <View style={styles.container}>
      <Image source={timerType.image}/>
      <View style={styles.actions}>
        <View style={styles.context}>          
        { // Dentro do React chamamos o JS dentro de chaves {}
          pomodoro.map( p=>
            <ActionButton
              key={p.id}
              active={timerType.id === p.id}
              onPress={() => setTimerType(p)}
              display={p.display}
            />

            // <Pressable key={p} //* um pressable utilizando o hook
            // style={ timerType.id === p.id ? styles.contextButtonActive: null}
            // onPress={() => setTimerType(p)}
            // > 
            // <Text style={styles.contextButtonText}>{p.display}</Text>
            // </Pressable>
        
          )
        }
        </View>
        <TimerDisplay totalSeconds = {timerType.initialValue}/>
          <FokusButton 
            press={toogleTimer}
            title={timerRef.current ? 'Pausar' : 'Começar'}
          /> 
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
    width: '80%',
    gap:32,
  },
  context:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  footer: {
    width: '80%',
  },
  footerText: {
    color: '#98A0A8',
    fontSize: 12.5,
    textAlign: "center",
  }
})