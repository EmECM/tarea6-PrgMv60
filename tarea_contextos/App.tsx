import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/components/navigation/StackNavigator';
import { AuthProvider } from './src/components/contexts/AuthContext';


export default function App() {
  return (
  <AuthProvider>
        <NavigationContainer>
          <StackNavigator/>
        </NavigationContainer>
      </AuthProvider>
  );
};