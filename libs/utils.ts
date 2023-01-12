import { Platform } from "react-native";

export const fetcher = async (url: string) => await fetch(url).then((r) => r.json());

export const ENDPOINT = `http://${Platform.OS === "android" ? "10.0.2.2" : "localhost"}:3000`;
