const emojiRegex =
  /(<a?(:\w+:\d+)>|\p{Emoji_Presentation}|\p{Extended_Pictographic}|\p{Emoji_Component}|:\w+:\s*)/gu

export default (msg: string): boolean => {
  // Find all emojis in the message using the regex
  const emoji = msg.match(emojiRegex)
  // If emojis are found
  if (emoji !== null) {
    const unicoded = emoji.map((emo) => {
      return emo.codePointAt(0)?.toString(16)
    })
    for (const i of unicoded) {
      // Check if the Unicode code point corresponds to a numeric character (0-9)
      if (i !== undefined && i >= '30' && i <= '39') {
        return false
      }
    }
  }
  return emoji !== null && emoji.join('').trim() === msg.replace(/\s/g, '')
}