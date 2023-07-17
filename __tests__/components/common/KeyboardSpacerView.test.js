import React from "react";
import { render } from "@testing-library/react-native";
import { Keyboard } from "react-native";
import KeyboardSpacerView from "../../../components/common/keyboardSpacerView/KeyboardSpacerView";

describe("KeyboardSpacerView", () => {
  it("should update height when keyboard is shown", () => {
    Keyboard.addListener = jest.fn((event, callback) => {
      if (event === "keyboardWillShow") {
        callback({ endCoordinates: { height: 200 } });
      }
    });

    const { getByTestId } = render(<KeyboardSpacerView />);
    const spacerView = getByTestId("spacer-view");

    expect(spacerView.props.style.height).toBe(200);
  });



  it("should reset height when keyboard is hidden", () => {
    Keyboard.addListener = jest.fn((event, callback) => {
      if (event === "keyboardWillHide") {
        callback();
      }
    });

    const { getByTestId } = render(<KeyboardSpacerView />);
    const spacerView = getByTestId("spacer-view");

    expect(spacerView.props.style?.height).toBe(0);
  });

  it("should remove event listener for keyboardWillHide", () => {
    const removeMock = jest.fn();
    Keyboard.addListener = jest.fn((event, callback) => {
      if (event === "keyboardWillHide") {
        callback();
        return { remove: removeMock };
      }
      return { remove: () => { } };
    });

    const { unmount } = render(<KeyboardSpacerView />);
    unmount();

    expect(removeMock).toHaveBeenCalledTimes(1);
  });


});

