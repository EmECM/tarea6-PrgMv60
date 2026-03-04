import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/LoginScreen";
import HomeScreen from "../../screens/HomeScreen";
import TabsNavigator from "./TabsNavigator";

export type RootStackParamsList={
    Login: undefined,
    Tabs: {email: string},
} 

const Stack = createNativeStackNavigator<RootStackParamsList>();

 export default function StackNavigator(){
    return(
        //<Stack.Navigator initialRouteName='login'
        // screenOptions={{headerShown:false}}
        <Stack.Navigator initialRouteName={'Login'}>
            <Stack.Screen 
                name = "Login" 
                component={LoginScreen}
            />
           {/* <Stack.Screen 
                name = "Home" 
                component={HomeScreen}
            />*/}
            <Stack.Screen 
                name = "Tabs" 
                component={TabsNavigator}
            />
        </Stack.Navigator>
    );

 }