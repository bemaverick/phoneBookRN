import { StyleSheet } from "react-native";
import {COLORS} from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  bottomBlock: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    flex: 1,
  },
  phoneBlock: {
    flex: 1
  },
  editButton: {
    marginBottom: 12,
  },
  backButton: {
    backgroundColor: "transparent"
  },
  backButtonText: {
    color: COLORS.primaryDark
  }
});
