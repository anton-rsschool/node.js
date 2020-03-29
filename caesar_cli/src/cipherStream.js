const { Transform } = require('stream');

const { caesarCipher } = require('./caesarCipher');

const CIPHER_ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

exports.createCipherStream = (action, shift) =>
  new Transform({
    transform: (data, encoding, callback) => {
      const encodedData = caesarCipher(
        CIPHER_ALPHABET,
        data.toString(),
        action,
        shift
      );
      callback(null, encodedData);
    }
  });
