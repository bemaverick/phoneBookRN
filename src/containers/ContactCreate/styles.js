import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 16,
  },
  backButton: {
    backgroundColor: "transparent",
    marginVertical: 20
  },
  backButtonText: {
    color: COLORS.primaryDark
  }
});
