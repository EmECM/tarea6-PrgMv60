import { NavigationContainer } from '@react-navigation/native';
import {View} from 'react-native';
import StackNavigator from './src/components/navigation/StackNavigator';
import { AuthProvider } from './src/contexts/AuthContext';
import { LanguageProvider } from './src/contexts/LanguageContext';


export default function App() {
  return (
  <AuthProvider>
        <NavigationContainer>
          <StackNavigator/>
        </NavigationContainer>
      </AuthProvider>
  );
};