import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        gap: SIZES.large,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomColor: COLORS.gray2,
        borderBottomWidth: 1,
        padding: SIZES.medium,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 200,
    },
    wrapper: {
        
    },
    name: {
        fontSize: SIZES.medium,
        fontWeight: 500,
        marginBottom: SIZES.small        
    },
    recentChat: {
        color: '#212529',
        fontWeight: 500
    }
});

export default styles;
