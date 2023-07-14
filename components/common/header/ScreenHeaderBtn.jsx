import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import styles from "./screenHeader.style";

const ScreenHeaderBtn = ({ icon, size, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Ionicons name={icon} size={size} color="black" />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
