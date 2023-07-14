import { useRef } from "react";
import { View, Text, FlatList } from "react-native"
import { Octicons } from '@expo/vector-icons';
import moment from "moment";
import { MY_USER_ID } from "../../constants"
import styles from "./chatBox.style";

const ChatBox = ({ msgs }) => {
  const flatListRef = useRef(null)
  return (
    <View
      style={styles.container}
    >
      <FlatList
        data={msgs}
        ref={flatListRef}
        onContentSizeChange={() => {
          if (flatListRef.current && msgs.length) {
            flatListRef?.current?.scrollToEnd();
          }
        }}
        keyExtractor={(item, index) => item.id + index}
        renderItem={({ item }) => {
          const isMe = item.id === MY_USER_ID;
          return (
            <View
              style={[
                styles.textContainer,
                isMe ? styles.rigthTextContainer : styles.leftTextContainer
              ]}
            >
              <Text style={[
                styles.text,
                isMe ? styles.rightText : styles.leftText
              ]}>{item.msg}
              </Text>
              <View style={styles.details}>
                <Text style={[
                  styles.timestamp,
                  isMe ? styles.rightText : styles.leftText]}>
                  {moment().format('HH MM A')}
                </Text>
                {isMe && <Octicons name="check" size={18} color="white" />}
              </View>
            </View>
          )
        }
        }
      />
    </View>
  )
}

export default ChatBox