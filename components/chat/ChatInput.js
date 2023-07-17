import { useState } from 'react';
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from "./chatInput.style";
import { MY_USER_ID } from '../../constants';
import moment from 'moment';

const DUMMY_RESPONSE = ['Hey there!', 'Hello!!', 'How are you?', 'Hello, Good Morning']

const ChatInput = ({ setMsgs, id }) => {
  const [text, setText] = useState('')

  const simulateReply = () => {
    const timeout = setTimeout(() => {
      setMsgs(msgs => [...msgs,
      {
        id: id,
        msg: DUMMY_RESPONSE[Math.floor(Math.random() * 4)],
        date: moment().unix()
      }
      ])
      clearTimeout(timeout)
    }, 1000)
  }

  const handleSubmit = () => {
    setMsgs(msgs => [...msgs, {
      id: MY_USER_ID,
      msg: text,
      date: moment().unix()
    }])
    setText('')
    simulateReply()
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.textInput}
          value={text}
          onChangeText={(text) => setText(text)}
          placeholder='What are you looking for?'
          testID="chat-input"
        />
      </View>

      <TouchableOpacity
        style={styles.btn}
        disabled={!text}
        onPress={handleSubmit}
        testID="send-button"
      >
        <Ionicons
          name="send"
          size={24}
          color="black" />
      </TouchableOpacity>
    </View>
  )
}

export default ChatInput