import { FunctionComponent } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const StarIcon: FunctionComponent<SvgProps> = (props) => (
	<Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<Path
			fill="currentColor"
			d="M16.6 20.463a1.5 1.5 0 0 1-.7-.174l-3.666-1.927a.5.5 0 0 0-.464 0L8.1 20.289a1.5 1.5 0 0 1-2.177-1.581l.7-4.082a.5.5 0 0 0-.143-.442l-2.964-2.891a1.5 1.5 0 0 1 .832-2.559l4.1-.6a.5.5 0 0 0 .376-.273l1.833-3.714a1.5 1.5 0 0 1 2.69 0l1.833 3.714a.5.5 0 0 0 .376.274l4.1.6a1.5 1.5 0 0 1 .832 2.559l-2.965 2.891a.5.5 0 0 0-.144.442l.7 4.082a1.5 1.5 0 0 1-1.479 1.754Zm-3.9-2.986 3.664 1.923a.5.5 0 0 0 .725-.527l-.7-4.082a1.5 1.5 0 0 1 .432-1.328l2.965-2.89a.5.5 0 0 0-.277-.853l-4.1-.6a1.5 1.5 0 0 1-1.13-.821l-1.83-3.705a.516.516 0 0 0-.9 0l-1.83 3.714a1.5 1.5 0 0 1-1.13.82l-4.1.6a.5.5 0 0 0-.277.853l2.968 2.887a1.5 1.5 0 0 1 .431 1.332l-.7 4.082a.5.5 0 0 0 .726.527l3.663-1.932a1.5 1.5 0 0 1 1.4 0Z"
		/>
	</Svg>
);
export const TimerIcon: FunctionComponent<SvgProps> = (props) => (
	<Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
		<Path
			fill="currentColor"
			fillRule="evenodd"
			d="M7.5.85a.5.5 0 0 0-.5.5v2.172a.5.5 0 1 0 1 0v-1.65a5.65 5.65 0 1 1-4.81 1.974.5.5 0 1 0-.762-.647A6.65 6.65 0 1 0 7.5.85Zm-.76 7.23L4.224 4.573a.25.25 0 0 1 .348-.348L8.081 6.74a.96.96 0 1 1-1.34 1.34Z"
			clipRule="evenodd"
		/>
	</Svg>
);

export const HeartIcon: FunctionComponent<SvgProps> = (props) => (
	<Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
		<Path
			fill="currentColor"
			d="M128 222a6 6 0 0 1-2.9-.8c-1.1-.5-25.9-14.6-51.1-37.2-34.5-31.1-52-62-52-92a58 58 0 0 1 106-32.6A58 58 0 0 1 234 92c0 30-17.5 60.9-52 92-25.2 22.6-50 36.7-51.1 37.2a6 6 0 0 1-2.9.8ZM80 46a46 46 0 0 0-46 46c0 57.3 77.8 107.3 94 117 16.2-9.7 94-59.7 94-117a46 46 0 0 0-88.5-17.7 5.9 5.9 0 0 1-11 0A46 46 0 0 0 80 46Z"
		/>
	</Svg>
);

export const PlayIcon: FunctionComponent<SvgProps> = (props) => (
	<Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
		<Path
			fill="currentColor"
			d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440Z"
		/>
	</Svg>
);
