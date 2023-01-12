import { FunctionComponent } from "react";
import { View, Text, Image } from "react-native";
import { useTailwind } from "tailwind-rn";

type Props = {
	name: string;
};

export const Profile: FunctionComponent<Props> = (props) => {
	const tailwind = useTailwind();
	return (
		<View style={tailwind("flex flex-row items-center justify-between w-full")}>
			<View>
				<Text
					style={[
						tailwind("text-xl font-semibold text-primary mb-2"),
						{
							fontFamily: "Poppins-Black",
						},
					]}
				>
					Hello, {props.name} 👋
				</Text>
				<Text style={tailwind("text-gray-500")}>What you want to cook today ?</Text>
			</View>
			<Image style={tailwind("w-14 h-14 rounded-full")} source={require(`../../assets/profile.jpg`)} />
		</View>
	);
};
