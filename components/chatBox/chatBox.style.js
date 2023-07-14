import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.medium,
  },
  textContainer: {
    width: '60%',
    paddingHorizontal: SIZES.small,
    paddingVertical: SIZES.xxSmall,
    marginTop: SIZES.medium,
    borderRadius: 10,
  },
  rigthTextContainer: {
    backgroundColor: COLORS.blue,
    marginLeft: 'auto',
  },
  leftTextContainer: {
    justifyContent: 'flex-start',
    backgroundColor: COLORS.gray,
  },
  text: {
    paddingRight: SIZES.large,
    fontSize: SIZES.large,
    fontWeight: 500
  },
  rightText: {
    color: COLORS.white,
  },
  leftText: {
    color: COLORS.black,
  },
  details: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    gap: SIZES.medium
  },
  timestamp: {
    fontSize: SIZES.small,
    color: COLORS.white
  }
});

export default styles;
