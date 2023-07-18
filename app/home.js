
import { SafeAreaView, Text, View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { Stack } from "expo-router";
import { useSelector } from "react-redux";
import { COLORS, SIZES } from "../constants";
import RecentChatBox from "../components/recentChatBox/RecentChatBox";

export default function Home() {
  const users = useSelector((state) => state.users)

  if(!users)  return <ActivityIndicator testID="activity-indicator" animating={true} color={COLORS.primary} />

  return (
    <SafeAreaView style={styles.safeArea} testID="safe-area-view">
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => <View><Text style={styles.heading}>Chats</Text></View>,
          headerTitle: "",
        }}
      />
      <View style={styles.container}>
        <FlatList
          testID="flat-list"
          data={Object.keys(users)}
          renderItem={({ item }) => <RecentChatBox testID="recent-chat-box"
            details={{ id: item, user: users[item] }}
          />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.lightWhite
  },
  heading: {
    fontSize: SIZES.xLarge,
    fontWeight: 700,
    paddingTop: SIZES.large
  },
  container: {
    flex: 1,
    marginTop: SIZES.large
  },
});
