import { StatusBar } from 'react-native';
import { Loading } from './src/components/Loading';
import { Home } from './src/screens/Home';

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
      <Home />
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent/>
    </>
  );
}


