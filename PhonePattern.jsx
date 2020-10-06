/**
 * returns phone pattern as an array
 * pattern - string with the phone number pattern (i.e. "+86 000 000 0000")
 */
export const PhonePattern = (phone, pattern) => {
  let phonePattern = pattern;
  while (phonePattern.match(/([()-\s](?=[\d]))/g) !== null) {
    for (let i = 1; i <= phonePattern.length; i++) {
      if (
        phonePattern.charAt(i).match(/[()-\s]/) &&
        phonePattern.charAt(i + 1).match(/[\d]/)
      ) {
        phonePattern = `${phonePattern.substring(
          0,
          i + 1
        )}#${phonePattern.substring(i + 1, phonePattern.length)}`;
        break;
      }
    }
  }
  return phonePattern.split(/[#]|(?=[\s-()])/g);
  //i.e. ['+86', ' ', '000', ' ', '000', ' ', '0000'];
};
