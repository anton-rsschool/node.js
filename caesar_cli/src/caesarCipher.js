const caesarCipher = (cipherAlphabet, string, action, shift) => {
  const { length } = cipherAlphabet;
  const cipherShift = Number(
    action === 'encode' ? shift % length : -shift % length
  );

  const getEncodeChar = char => {
    const loverChar = char.toLowerCase();
    const isUpper = char !== loverChar;
    const index = cipherAlphabet.indexOf(loverChar);

    if (index === -1) {
      return char;
    }
    const cipherCharIndex = (index + cipherShift + length) % length;

    return isUpper
      ? cipherAlphabet[cipherCharIndex].toUpperCase()
      : cipherAlphabet[cipherCharIndex];
  };

  return string
    .split('')
    .map(getEncodeChar)
    .join('');
};

exports.caesarCipher = caesarCipher;
