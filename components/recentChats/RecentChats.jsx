import { useRouter } from "expo-router";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { images } from "../../constants";

import styles from "./recentChats.style";

const RecentChats = ({ details }) => {
  const router = useRouter()
  const { user } = details
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push(`/chat/${details.id}`)}>
      <Image
        source={images[user.profile]}
        resizeMode='cover'
        style={styles.avatar}
      />
      <View style={styles.wrapper}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.recentChat}>{user.msgs?.[user.msgs.length - 1]?.msg || 'Start new conversation'}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default RecentChats