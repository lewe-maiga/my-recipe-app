import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@pages/home";
import { Recipe } from "@pages/recipe";

const Stack = createNativeStackNavigator<RouteParams>();

export const RootNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Group>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen
					name="Recipe"
					component={Recipe}
					options={{
						animation: "slide_from_right",
					}}
				/>
			</Stack.Group>
		</Stack.Navigator>
	);
};
