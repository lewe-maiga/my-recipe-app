import { FunctionComponent } from "react";
import { View, Text } from "react-native";
import { useTailwind } from "tailwind-rn";

type Props = {
	name: string;
	active?: boolean;
};
export const Category: FunctionComponent<Props> = (props) => {
	const tailwind = useTailwind();

	return (
		<View style={tailwind(`flex bg-gray-100 py-2 px-5 mr-4 rounded-xl ${props.active ? "bg-primary/20" : ""}`)}>
			<Text style={tailwind(`font-semibold text-gray-500 ${props.active ? "text-primary" : ""}`)}>{props.name}</Text>
		</View>
	);
};

Category.defaultProps = {
	name: "",
	active: false,
};
