import { View, StatusBar, ScrollView, FlatList, ActivityIndicator } from "react-native";
import { useTailwind } from "tailwind-rn";
import Youtube from "react-native-youtube-iframe";
import { Profile } from "@components/profile";
import { Searchbar } from "@components/searchbar";
import useSWR from "swr";
import { Category } from "@components/category";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ENDPOINT, fetcher } from "@libs/utils";
import { RecipeItem } from "@components/recipe-item";

export const Home = () => {
	const tailwind = useTailwind();
	const router = useNavigation<NativeStackNavigationProp<RouteParams>>();

	const renderListItem = ({ item }: { item: Recipe }) => {
		const onRecipePress = () => {
			router.navigate("Recipe", { id: item.id });
		};

		return <RecipeItem data={item} onPress={onRecipePress} />;
	};

	const { data, error } = useSWR<Recipe[]>(`${ENDPOINT}/recipes/`, fetcher);
	if (error) return error;
	return (
		<ScrollView nestedScrollEnabled style={tailwind("flex-1 pt-4 px-4 bg-white")}>
			<Profile name="Lewe" />
			<Searchbar />
			<Player />
			<View>
				<ScrollView nestedScrollEnabled showsHorizontalScrollIndicator={false} horizontal style={tailwind("flex")}>
					<Category name="Lunch" />
					<Category name="Breakfast" active />
					<Category name="Dinner" />
					<Category name="Easy" />
					<Category name="Fast" />
				</ScrollView>
			</View>
			{!data ? <ActivityIndicator /> : <FlatList data={data} style={tailwind("mt-4")} renderItem={renderListItem}></FlatList>}
			<StatusBar hidden />
		</ScrollView>
	);
};

export const Player = () => {
	const tailwind = useTailwind();

	return (
		<View style={tailwind("rounded-xl border overflow-hidden my-4 w-full h-[200]")}>
			<Youtube videoId="Kes2fk-Nuwo" height={200} />
		</View>
	);
};
