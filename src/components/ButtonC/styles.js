import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 2,
    backgroundColor: COLORS.primaryDark,
  },
  text: {
    color: COLORS.white,
    fontSize: 16,
    letterSpacing: 1
  },
});


export default styles;
