import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "../redux/store";

const Layout = () => {

  return (
    <Provider store={store}>
      <Stack initialRouteName="home">
        <Stack.Screen name="home" />
      </Stack>
      </Provider>
  )
};

export default Layout;
