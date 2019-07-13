import { StyleSheet, PixelRatio } from "react-native";

import { COLORS } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 48,
    flexDirection: "row",
  },
  avatarBlock: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: COLORS.primaryDark,
    margin: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  textBlock: {
    flex: 1,
    marginLeft: 8,
    marginRight: 14,
    justifyContent: "center",
    borderBottomWidth: 1 / PixelRatio.get() ,
    borderBottomColor: COLORS.black06
  },
  text: {
    fontSize: 13,
    letterSpacing: 0.8,
    color: COLORS.black08
  },
  fioInitials: {
    letterSpacing: 0.8,
    color: COLORS.white
  }
});
