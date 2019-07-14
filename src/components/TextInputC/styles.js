import { StyleSheet, PixelRatio } from "react-native";

import { COLORS } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  iconBlock: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "flex-start",
    marginRight: 6
  },
  textInput: {
    height: 32,
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: COLORS.black06
  },

});
