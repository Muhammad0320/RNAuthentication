import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { Colors } from "./constants/styles";
import { AuthContextProvider, useAuth } from "./context/AuthContext";
import IconButton from "./components/ui/IconButton";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const { logout } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton color={tintColor} size={24} onPress={logout} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {!isAuthenticated && <AuthStack />}
      {isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </>
  );
}
