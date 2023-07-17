import React, { useEffect, useState } from "react";
import {
  Keyboard,
  View
} from "react-native";

const KeyboardSpacerView = () => {

  const [height, setHeight] = useState(0);

  useEffect(() => {
    const event1 = Keyboard.addListener('keyboardWillShow', keyboardWillShow);
    const event2 = Keyboard.addListener('keyboardWillHide', keyboardWillHide);
    return () => {
      event1.remove()
      event2.remove()
    };
  }, [])

  const keyboardWillShow = (event) => {
    setHeight(event.endCoordinates.height);
  }

  const keyboardWillHide = () => {
    setHeight(0);
  }

  return (
    <View style={{ height: height }} testID="spacer-view" />
  );
}

export default KeyboardSpacerView