import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { TabsParamList } from "../components/navigation/TabsNavigator";


type Props = NativeStackScreenProps<TabsParamList, 'Home'>;

export default function HomeScreen({navigation}: any){

return(
    <View>
        <Text>Bienvenido a Home</Text>
    </View>
);

}