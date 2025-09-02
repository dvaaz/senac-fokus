import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require('./foco.png')}/>
      <View style={styles.actions}>

        <View styles={styles.context}>          
          <Pressable style={styles.contextButtonActive}>
            <Text style={styles.contextButtonText}>Foco</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.contextButtonText}>Pausa Curta</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.contextButtonText}>Pausa Longa</Text>
          </Pressable>
        </View>

        <Text style={styles.timer}>25:00</Text>
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
  }

})
  