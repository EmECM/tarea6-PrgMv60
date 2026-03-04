import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import CustomButton from '../components/CustomButton';
import { useState } from 'react';
import { useAuth } from '../components/contexts/AuthContext';

export default function LoginScreen() {
  //definicion de variable y funcion para cambios en el estado
  const [selectedRole, setSelectedRole] = useState<'admin' | 'common'>('common');
  const { login } = useAuth();  

  //funcion para guardar rol
  const handleOnLogin = () => {
    try {
      login(selectedRole);
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  // Componente Radio Button
  const RadioOption = ({ label, value }: { label: string, value: 'admin' | 'common' }) => (
    <TouchableOpacity 
      style={styles.radioContainer} 
      onPress={() => setSelectedRole(value)}
    >
      <View style={styles.radioCircle}>
        {selectedRole === value && <View style={styles.selectedRb} />}
      </View>
      <Text style={styles.radioText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Bienvenido</Text>
        
        <View style={styles.selectorWrapper}>
          <RadioOption label="Administrador" value="admin" />
          <RadioOption label="Usuario Comun" value="common" />
        </View>

        <View style={styles.buttonsWrapper}>
          <CustomButton 
            title={'Ingresar'}
            onClick={handleOnLogin}
            variant={'primary'} 
          />        
        </View>  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  card: {
    width: "85%",
    padding: 30,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    alignItems: "center",
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 30,
    color: '#333',
  },
  selectorWrapper: {
    width: '100%',
    marginBottom: 40,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#3b82f6',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f4f6',
  },
  selectedRb: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#3b82f6',
  },
  radioText: {
    fontSize: 16,
    marginLeft: 15,
    color: '#4b5563',
  },
  buttonsWrapper: {
    width: "100%",
  },
});