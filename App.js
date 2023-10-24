import StackNavigator from "./navigation/StackNavigator"
import { useFonts } from "expo-font";

export default App = () => {
    const [fontsLoaded, error] = useFonts({
      "Gilroy-Bold": require("./assets/Gilroy-FREE/Gilroy-ExtraBold.otf"),
      "Gilroy-Regular": require("./assets/Gilroy-FREE/Gilroy-Light.otf"),
    });

   if (!fontsLoaded && !error) {
     return null;
   }
  return (
    <StackNavigator/>
  )
}