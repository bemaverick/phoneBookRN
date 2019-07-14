import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primaryDark
  },
  text: {
    fontSize: 20,
    color: COLORS.white,
    fontWeight: "bold",
    letterSpacing: 0.8
  }

});
