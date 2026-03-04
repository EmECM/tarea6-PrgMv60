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

//definicion ternario para el acceso de settings o home
const initialRoute = user?.role === 'admin' ? 'Settings':'Home';

    return(
        <Tab.Navigator>
            <Tab.Screen
                name = "Home"
                component={HomeScreen}
            />
            {/*condicional para mostar settings al admin*/}
            {user?.role === 'admin' && (
                <Tab.Screen
                name = "Settings"
                component={SettingsScreen}
            />

            )}
            
        </Tab.Navigator>
    );

}
