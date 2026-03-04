import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "../components/contexts/AuthContext";
import { TabsParamList } from "../components/navigation/TabsNavigator";
import CustomButton from "../components/CustomButton";


export default function HomeScreen(){
    //llamada a la funcion del hook
    const {logout, user} = useAuth();
return (
    <View style={styles.container}>
      <Text>Bienvenido a Home</Text>
      
     {/*boton para cierre de sesion*/}
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Cerrar Sesión" 
          onClick={logout} 
          variant="secondary" 
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
  },
  buttonContainer: {
    marginTop: 20,
    width: '60%',
  },
});