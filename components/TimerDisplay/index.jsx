import { StyleSheet, Text } from "react-native-web";


export const TimerDisplay = ( {timerSeconds} ) => {
        const time = new Date(timerSeconds * 1000)
        const options ={ minute: "2-digit", second: "2-digit" }
  return (
     <Text style={styles.timer}>
          {time.toLocaleTimeString("pt-BR", options)}         
     </Text>
  
  );
}

const styles = StyleSheet.create({
  timer: {
    fontSize: 54,
    color: '#FFF',
    fontWeight: "bold",
    textAlign: "center",
  }
})
