import { Text, View, ActivityIndicator, Image, ScrollView, FlatList, TouchableOpacity } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { ENDPOINT, fetcher } from "@libs/utils";
import useSWR from "swr";
import { useTailwind } from "tailwind-rn";
import { Category } from "@components/category";
import { FunctionComponent } from "react";
import { HeartIcon, PlayIcon } from "@components/svg";

export const Recipe = () => {
	const route = useRoute<RouteProp<RouteParams>>();
	const { data, error } = useSWR<Recipe>(`${ENDPOINT}/recipes/${route.params?.id}`, fetcher);
	const tailwind = useTailwind();

	if (error) return error;
	if (!data) return <ActivityIndicator size="large" color={"red"} />;

	return (
		<ScrollView style={tailwind("flex-1 p-5 bg-white")}>
			<Image source={{ uri: data.image }} resizeMode="cover" style={tailwind("h-[230] w-full rounded-xl")} />
			<Text style={tailwind("pl-1 my-4 font-bold text-xl text-secondary")}>{data.name}</Text>
			<View style={tailwind("flex flex-row w-full border-2 border-gray-100 rounded-xl py-3 px-5 justify-around")}>
				<View style={tailwind("flex flex-col justify-center items-center")}>
					<Text style={tailwind("text-primary font-bold text-xl")}>{data.calories}</Text>
					<Text style={tailwind("text-gray-400")}>kcal</Text>
				</View>
				<View style={tailwind("flex flex-col justify-center items-center")}>
					<Text style={tailwind("text-primary font-bold text-xl")}>{data.rating}</Text>
					<Text style={tailwind("text-gray-400")}>rating</Text>
				</View>

				<View style={tailwind("flex flex-col justify-center items-center")}>
					<Text style={tailwind("text-primary font-bold text-xl")}>{data.expected_time}</Text>
					<Text style={tailwind("text-gray-400")}>minutes</Text>
				</View>

				<View style={tailwind("flex flex-col justify-center items-center")}>
					<Text style={tailwind("text-primary font-bold text-xl")}>{data.persons}</Text>
					<Text style={tailwind("text-gray-400")}>{data.persons >= 2 ? "persons" : "person"}</Text>
				</View>
			</View>
			<View style={tailwind("flex flex-row mt-4 px-1")}>
				<Category name="Breakfast" active />
				<Category name="Dinner" active />
				<Category name="Easy" active />
			</View>
			<View style={tailwind("flex flex-row w-full justify-between px-1 my-4")}>
				<Text style={tailwind("text-secondary text-lg font-semibold")}>Ingredients</Text>
				<Text style={tailwind("text-gray-400")}>
					{data.ingredients.length >= 2 ? `${data.ingredients.length} items` : `${data.ingredients.length} item`}
				</Text>
			</View>

			<FlatList data={data.ingredients} style={tailwind("")} renderItem={({ item }) => <IngredientItem data={item} />} />

			<View style={tailwind("flex-1 py-2 w-full flex-row flex  mb-6 h-16")}>
				<TouchableOpacity style={tailwind("border border-gray-200 rounded-xl w-14 p-2 mr-2")}>
					<HeartIcon style={tailwind("text-secondary h-full w-full")} />
				</TouchableOpacity>
				<TouchableOpacity activeOpacity={0.8} style={tailwind(" bg-primary flex-1 rounded-xl justify-center items-center flex-row flex")}>
					<Text style={tailwind("text-white font-semibold text-sm mr-1 ")}>start cooking</Text>
					<View style={tailwind("h-8 w-8 p-1")}>
						<PlayIcon style={tailwind("text-white h-full w-full")} />
					</View>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

type Props = { data: Ingredient };
const IngredientItem: FunctionComponent<Props> = (props) => {
	const tailwind = useTailwind();

	return (
		<View style={tailwind("flex flex-row justify-between mb-2 items-center ")}>
			<View style={tailwind("flex flex-row items-center ")}>
				<View style={tailwind("bg-gray-100 h-10 w-10 rounded-xl flex justify-center items-center px-1 py-2 mr-2")}>
					<Image source={{ uri: props.data.image }} resizeMode="cover" style={tailwind("h-full w-full")} />
				</View>
				<Text style={tailwind("text-secondary")}>{props.data.name}</Text>
			</View>
			<Text style={tailwind("text-secondary/70")}>{props.data.quantity.toLowerCase()}</Text>
		</View>
	);
};
