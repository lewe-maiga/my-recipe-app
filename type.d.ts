type Recipe = {
	id: 1;
	name: string;
	image: string;
	calories: number;
	persons: number;
	rating: number;
	author: string;
	expected_time: number;
	instructions: string;
	ingredients: Ingredient[];
};

type Ingredient = {
	name: string;
	quantity: string;
	image: string;
};

type RouteParams = {
	Home: undefined;
	Recipe: {
		id: number;
	};
};
