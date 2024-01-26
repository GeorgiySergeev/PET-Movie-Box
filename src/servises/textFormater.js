export const textFormat = text => text.replace(/<\/?[^>]+(>|$)/g, '');

export function addSpacesBetweenSentences(text) {
  let formattedText = text.replace(/([.!?])\s*([^])/g, '$1 $2');
  return formattedText;
}
