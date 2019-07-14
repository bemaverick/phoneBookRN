import { StyleSheet, Dimensions } from "react-native";

import { COLORS } from "../../constants/colors";
const { height } = Dimensions.get("window");

export default styles = StyleSheet.create({
  container: {
    height: height / 2,
    backgroundColor: COLORS.primaryLight,
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    width: height / 4,
    height: height / 4,
    borderRadius: height / 8,
    backgroundColor: COLORS.primaryDark,
    borderWidth: 2,
    borderColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center"
  },
  initials: {
    fontSize: 40,
    letterSpacing: 5,
    color: COLORS.white,
    fontWeight: "bold"
  },
  row: {
    height: 40,
    opacity: 0.65,
    flexDirection: "row"
  },
  textBlock: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    backgroundColor: COLORS.primaryLight
  },
  rightBlock: {
    backgroundColor: COLORS.primaryDark
  },
  text: {
    fontSize: 16,
    letterSpacing: 0.8
  }

});
