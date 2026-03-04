import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../../screens/HomeScreen";
import SettingsScreen from "../../screens/SettingsScreen";

export type TabsParamList = {
    Home: {role: "common"};
    Settings: undefined;
}

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator (){

    return(
        <Tab.Navigator>
            <Tab.Screen
                name = "Home"
                component={HomeScreen}
            />
            <Tab.Screen
                name = "Settings"
                component={SettingsScreen}
            />
        </Tab.Navigator>
    );

}
