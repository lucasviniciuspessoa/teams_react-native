import {createNativeStackNavigator} from '@react-navigation/native-stack'


// const  {Navigator, Screen} = createNativeStackNavigator();
const  Stack = createNativeStackNavigator();

import { Groups } from '../screens/Groups';
import { Players } from '../screens/Players';
import {  NewGroup} from '../screens/NewGroup';

export function AppRoutes() {
    return (
        <Stack.Navigator initialRouteName='groups' screenOptions={{headerShown:true}}>
            <Stack.Screen  name="groups" component={Groups}/>
            <Stack.Screen  name="new" component={NewGroup}/>
            <Stack.Screen  name="players" component={Players}/>

        </Stack.Navigator>
    );
}


