import { StarIcon, TimerIcon } from "@components/svg";
import { LinearGradient } from "expo-linear-gradient";
import { FunctionComponent } from "react";
import { ImageBackground, TouchableWithoutFeedback, View, Text } from "react-native";
import { useTailwind } from "tailwind-rn";

type Props = {
	data: Recipe;
	onPress: () => void;
};
export const RecipeItem: FunctionComponent<Props> = (props) => {
	const tailwind = useTailwind();
	return (
		<TouchableWithoutFeedback onPress={props.onPress}>
			<View style={tailwind("w-full bg-gray-200 h-[230] rounded-xl mb-6 overflow-hidden relative")}>
				<ImageBackground resizeMode="cover" style={tailwind("w-full h-full -z-10")} source={{ uri: props.data.image }}>
					<LinearGradient
						start={{ x: 0, y: 0.11 }}
						end={{ x: 1, y: 0.5 }}
						style={tailwind("absolute left-0 top-0 w-full h-full opacity-100")}
						colors={["#000000", "transparent", "#000000"]}
					/>
					<View style={tailwind("flex-1 p-4 flex-col justify-between")}>
						<View style={tailwind("flex flex-row w-full justify-between items-center")}>
							<Text style={tailwind("text-white")}>{props.data.author}</Text>
							<View style={tailwind("flex flex-row items-center")}>
								<StarIcon style={tailwind("text-white w-6 h-6")} />
								<Text style={tailwind("text-white ml-2")}>{props.data.rating}</Text>
							</View>
						</View>
						<View>
							<Text style={tailwind("text-white font-bold text-xl")}>{props.data.name}</Text>
							<View style={tailwind("flex flex-row mt-2 items-center")}>
								<TimerIcon style={tailwind("text-white w-6 h-6")} />
								<Text style={tailwind("text-white ml-2")}>{props.data.expected_time} min</Text>
							</View>
						</View>
					</View>
				</ImageBackground>
			</View>
		</TouchableWithoutFeedback>
	);
};
