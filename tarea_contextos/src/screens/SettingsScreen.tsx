import {View, Text, StyleSheet} from "react-native";
import { useAuth } from "../components/contexts/AuthContext";
import CustomButton from "../components/CustomButton";

export default function SettingsScreen(){
    //llamada a la funcion del hook
    const {logout} = useAuth();

    return(
<View style={styles.container}>
      <Text style={styles.text}>Estas en Settings</Text>
      
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