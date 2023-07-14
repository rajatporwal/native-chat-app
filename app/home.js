
import { SafeAreaView, Text, View, StyleSheet, FlatList } from "react-native";
import { Stack } from "expo-router";
import { useSelector } from "react-redux";
import { COLORS, SIZES } from "../constants";
import RecentChatBox from "../components/recentChatBox/RecentChatBox";

export default function Home() {
  const users = useSelector((state) => state.users)
  return (
    <SafeAreaView style={styles.safeArea}>
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
          data={Object.keys(users)}
          renderItem={({ item }) => <RecentChatBox
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
