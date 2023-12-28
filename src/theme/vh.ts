import { Dimensions } from "react-native";
import Constants from "expo-constants";
const statusBarHeight = Constants.statusBarHeight;

export const vh = Dimensions.get("window").height - statusBarHeight;
