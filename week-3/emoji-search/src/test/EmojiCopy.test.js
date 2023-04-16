import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import EmojiResultRow from "../EmojiResultRow";

// This is a test suite for the EmojiResultRow component
describe("EmojiResultRow", () => {
  // This is a test case that checks if clicking the copy button copies the correct emoji to the clipboard
  it("copies clicked emoji to clipboard", async () => {
    // Define the emoji data to be rendered in the component
    const emojiData = [
      {
        symbol: "👋",
        title: "Waving Hand",
      },
    ];

    // Render the EmojiResultRow component with the emoji data as props
    render(
      <EmojiResultRow title={emojiData[0].title} symbol={emojiData[0].symbol} />
    );

    // Get the copy button by its text
    const copyButton = screen.getByText("Click to copy emoji");

    // Simulate a click event on the copy button
    fireEvent.click(copyButton);

    // Assert that the clipboard text attribute of the emoji row matches the copied emoji symbol
    expect(
      screen.getByTestId("emoji-row-test").getAttribute("data-clipboard-text")
    ).toEqual(emojiData[0].symbol);
  });
});
