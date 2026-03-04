import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/LoginScreen";
import TabsNavigator from "./TabsNavigator";
import { useAuth } from "../contexts/AuthContext";

export type RootStackParamsList={
    Login: undefined,
    Tabs: undefined,
} 

const Stack = createNativeStackNavigator<RootStackParamsList>();

 export default function StackNavigator(){
    //estado del contexto
    const {isAuthenticated} = useAuth();
    return(
        <Stack.Navigator 
        screenOptions={{headerShown:false}}>
        {/*Definicion de sentencia, si el usuario no esta autenticado va a login*/}
        {!isAuthenticated ? (
                <Stack.Screen 
                    name="Login" 
                    component={LoginScreen}
                />
            ) : (
                /* si esta autenticado muestra las Tabs */
                <Stack.Screen 
                    name="Tabs" 
                    component={TabsNavigator}
                />
            )} 
        </Stack.Navigator>
    );

 }