import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../../screens/HomeScreen";
import SettingsScreen from "../../screens/SettingsScreen";
import { useAuth } from "../contexts/AuthContext";

export type TabsParamList = {
    Home: undefined;
    Settings: undefined;
}

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator (){

//obtener usuario del contexto
const {user}= useAuth();


    return(
        // redireccion de pantalla de inicio segun el rol
        <Tab.Navigator initialRouteName={user?.role === 'admin' ? 'Settings' : 'Home'}>
            <Tab.Screen name="Home" component={HomeScreen} />
            {/*render de Settings si es admin*/}
            {user?.role === 'admin' && (
                <Tab.Screen name="Settings" component={SettingsScreen} />
            )}
        </Tab.Navigator>
    );

}
