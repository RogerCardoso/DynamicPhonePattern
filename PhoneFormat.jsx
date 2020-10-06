/**
 * returns number entered by the user in the given phone pattern
 * phoneNumber - string with the number to (i.e. user input)
 * phonePattern - array returned by the exported function PhonePattern
 */

export const FormatPhoneNumber = (phoneNumber, phonePattern) => {
  if (!phoneNumber) return phoneNumber;
  const prefix = phonePattern[0];
  const prefixLength = prefix.length;

  if (
    phoneNumber.substring(0, prefixLength) === prefix &&
    phoneNumber.length > prefixLength + 1
  ) {
    const phoneValue = phoneNumber
      .replace(/[^\d+]/g, '')
      .replace(`${prefix}0`, prefix);
    const phoneLength = phoneValue.length;
    let formattedPhoneNumber = prefix;
    let updatedPatternLength = prefixLength;

    /*Iterates over array created based on phone pattern and builds the returning variable*/
    let sectionLength;
    let phoneNumberSectionSplit;

    for (let i = 1; i < phonePattern.length; i++) {
      if (phonePattern[i].match(/[\d]/g) === null) {
        formattedPhoneNumber += phonePattern[i];
      } else {
        sectionLength = phonePattern[i].length;

        phoneNumberSectionSplit = phoneValue.slice(
          updatedPatternLength,
          (updatedPatternLength += sectionLength)
        );

        formattedPhoneNumber += `${phoneNumberSectionSplit}`;
        if (phoneLength <= updatedPatternLength) {
          break;
        }
      }
    }
    return formattedPhoneNumber;
  } else {
    if (phoneNumber.charAt(0) === '+') {
      return phoneNumber;
    } else {
      return `+${phoneNumber}`;
    }
  }
};
