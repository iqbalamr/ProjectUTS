import React, { lazy, Suspense } from "react"
import { Text } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Camera = lazy(() => import("./components/camera"))

const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <Suspense fallback={<Text>Loading....</Text>}>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="camera"
					screenOptions={{ headerShown: false }}
				>
					<Stack.Screen name="camera" component={Camera} />
				</Stack.Navigator>
			</NavigationContainer>
		</Suspense>
  );
}

