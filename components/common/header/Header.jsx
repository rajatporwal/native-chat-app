import { TouchableOpacity, View, Text, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import { images } from "../../../constants";

import styles from "./header.style";

const Header = ({ user, handlePress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnContainer} onPress={handlePress} testID="back-button">
        <Ionicons name='arrow-back-sharp' size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Image
          source={images[user?.profile]}
          style={styles.img}
        />
        <Text style={styles.name}>{user?.name}</Text>
      </View>
    </View>
  );
};

export default Header;
