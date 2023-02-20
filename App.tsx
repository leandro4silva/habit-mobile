import './src/lib/dayjs';

import { StatusBar } from 'react-native';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter';

export default function App() {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Inter_800ExtraBold
  });

  if(!fontLoaded){
    return(
      <Loading/>
    ); 
  }

  return (
    <>
      <Routes />
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent/>
    </>
  );
}


