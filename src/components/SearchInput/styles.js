import { StyleSheet, PixelRatio } from "react-native";

import { COLORS } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryLight,
    height: 40,
    justifyContent: "center",
   // borderBottomWidth: 2 / PixelRatio.get(),
    paddingHorizontal: 16
  },
  textInput: {
    height: 28,
    borderRadius: 30,
    paddingVertical: 0,
    paddingHorizontal: 24,
    margin: 0,
    backgroundColor: COLORS.white
  },
  iconBlock: {
    position: "absolute",
    left: 20,
    top: 6,
    height: 28,
    width: 16,
    justifyContent: "center",
    alignItems: "center"
  },
  iconBlockClear: {
    left: undefined,
    right: 20,
  }

});
