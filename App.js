import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import CardScreen from "./screens/CardScreen";
import GPayScreen from "./screens/GPayScreen";
import HomeScreen from "./screens/HomeScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "white",
          tabBarStyle: {
            backgroundColor: "black",
            borderTopWidth: 0,
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            color: "white",
          },
        }}
      >
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="yolo pay" component={CardScreen} />
        <Tab.Screen name="gpay" component={GPayScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
