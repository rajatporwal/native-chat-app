import { useEffect, useState, useCallback, useRef } from 'react';
import { SafeAreaView } from "react-native"
import { Stack, useRouter, useSearchParams } from "expo-router";
import { COLORS } from "../../constants"
import ChatInput from "../../components/chat/ChatInput";
import ChatBox from '../../components/chatBox/ChatBox';
import { useDispatch, useSelector } from 'react-redux';
import { pushNewMessages } from '../../redux/usersSlice';
import { useFocusEffect } from '@react-navigation/native';
import Header from '../../components/common/header/Header';
import KeyboardSpacerView from '../../components/common/keyboardSpacerView/KeyboardSpacerView';

const Chat = () => {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch();
  const router = useRouter()
  const params = useSearchParams();
  const user = users[params.id]
  const [msgs, setMsgs] = useState(user?.msgs || [])
  const msgRef = useRef()

  useEffect(() => {
    msgRef.current = msgs
  }, [msgs])

  useFocusEffect(
    useCallback(() => {
      return () => {
        dispatch(pushNewMessages({
          ...users,
          [params.id]: {
            ...users[params.id],
            msgs: msgRef.current
          }
        }))
      };
    }, [])
  );


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }} testID="chat-component">
      <Stack.Screen options={{ headerShown: false }} />
      <Header
        handlePress={() => router.back()}
        user={user}
      />
      <ChatBox msgs={msgs} />
      <ChatInput setMsgs={setMsgs} id={params.id} />
      <KeyboardSpacerView />
    </SafeAreaView>
  )
}

export default Chat