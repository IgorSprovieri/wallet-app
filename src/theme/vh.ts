import { Dimensions } from "react-native";
import Constants from "expo-constants";
const statusBarHeight = Constants.statusBarHeight;

export type Vh = number;

export const vh: Vh = Dimensions.get("window").height - statusBarHeight;
