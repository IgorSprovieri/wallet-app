import { Dimensions, PixelRatio } from "react-native";

const figmaWidth = 320;

export type Px = (valuePx: number) => number;

const px: Px = (valuePx: number) => {
  const widthPercent = (valuePx / figmaWidth) * 100;
  const screenWidth = Dimensions.get("window").width;
  return PixelRatio.roundToNearestPixel(
    (screenWidth * parseFloat(widthPercent.toString())) / 100
  );
};

export { px };
