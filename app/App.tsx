import { Groups } from './src/screens/Groups';
import theme from './src/theme';
// import { Groups } from '@/screens/Groups';
import {  Text, View, StyleSheet, ActivityIndicator, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import { Loading } from './src/comṕonents/Loading';
import { Routes } from './src/routes/index';
export default function App() {


  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});


  return (
    <ThemeProvider theme={theme}>
       <View style={styles.container}>
      {fontsLoaded? <Routes/> : <Loading/>}
    </View>
    <StatusBar barStyle='default'  />
     </ThemeProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    width:"100%",
    height:"100%",
    justifyContent:'center',
    alignItems:"center"

  }
})