/* eslint-disable no-sync */
/* eslint-disable no-process-exit */
const fs = require('fs');
const { program } = require('commander');

exports.processingOptions = () => {
  const validateShift = value => {
    const shift = parseInt(value, 10);

    if (isNaN(shift)) {
      console.error("Error: option '-s, --shift <shift>' must be an integer.");
      process.exit(1);
    }
    return value;
  };

  const validateAction = value => {
    const ACTIONS_LIST = ['encode', 'decode'];

    if (ACTIONS_LIST.includes(value)) {
      return value;
    }
    const error = `Error: option '-a, --action <action>'  must be a string of the following values: ${ACTIONS_LIST}.`;
    console.error(error);
    process.exit(1);
  };

  const validateInput = value => {
    if (!fs.existsSync(value)) {
      console.error(`Error: '-i, --input <path>' '${value}': file not found.`);
      process.exit(1);
    }
    if (fs.accessSync(value) !== undefined) {
      console.error(
        `Error: '-i, --input <path>' '${value}': no access to file.`
      );
      process.exit(1);
    }
    return value;
  };

  const validateOutput = value => {
    if (!fs.existsSync(value)) {
      console.error(`Error: '-o, --output <path>' '${value}': file not found.`);
      process.exit(1);
    }
    if (fs.accessSync(value) !== undefined) {
      console.error(
        `Error: '-o, --output <path>' '${value}': no access to file.`
      );
      process.exit(1);
    }
    return value;
  };

  program
    .storeOptionsAsProperties(false)
    .requiredOption('-s, --shift <number>', 'a shift', validateShift)
    .requiredOption(
      '-a, --action <action>',
      'an action encode/decode',
      validateAction
    )
    .option('-i, --input <path>', 'an input file', validateInput)
    .option('-o, --output <path>', 'an output file', validateOutput);

  program.parse(process.argv);

  return program.opts();
};
