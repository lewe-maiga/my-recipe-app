import { TextInput, Image, View } from "react-native";
import { useTailwind } from "tailwind-rn";

export const Searchbar = () => {
	const tailwind = useTailwind();

	return (
		<View style={tailwind("flex flex-row items-center w-full bg-gray-100 rounded-full px-4 mt-4")}>
			<Image style={tailwind("w-5 h-5 mr-2")} source={require("../../assets/searchbar.png")} />
			<TextInput
				placeholder="Search by recipes"
				underlineColorAndroid="transparent"
				style={[tailwind("py-3 px-2 flex-1 text-gray-600 text-xl")]}
				autoCapitalize="none"
			/>
		</View>
	);
};
