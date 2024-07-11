import Constants from "expo-constants";
import { Dimensions } from "react-native";
import { Vh } from "./types";

const statusBarHeight = Constants.statusBarHeight;

export const vh: Vh = Dimensions.get("window").height - statusBarHeight;
