import { Text } from "react-native-web";

export const TimerButton = (timer) => {
 return (
     <Text style={styles.timer}>
         {/* {timerType.initialValue} */}
         {new Date(timerType.initialValue * 1000).toLocaleTimeString("pt-BR", {
             minute: "2-digit", second: "2-digit"
         })}
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