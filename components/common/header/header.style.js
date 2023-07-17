import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  btnContainer: {
    width: SIZES.xxxLarge,
    height: SIZES.xxxLarge,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
  titleContainer: {
    marginLeft: SIZES.large,
    gap: SIZES.xSmall,
    alignItems: 'center',
    flexDirection: 'row'
  },
  img: {
    width: SIZES.xxLarge,
    height: SIZES.xxLarge,
    borderRadius: SIZES.medium
  },
  name: {
    fontSize: SIZES.large,
    fontWeight: 'bold'
  }
});

export default styles;
