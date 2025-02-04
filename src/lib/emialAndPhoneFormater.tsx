export function formatPhoneNumber(countryCode: string, phone: string) {
  const cleanedNumber = phone.replace(/[\s()\-]/g, "");

  if (!cleanedNumber.startsWith(countryCode)) {
    return countryCode + cleanedNumber;
  }

  return cleanedNumber;
}

// Function to standardize email addresses
export function formatEmail(email: string): string | null {
  if (!email.includes("@")) {
    return null; // Ensure "@" is present for a valid email
  }

  const atIndex = email.indexOf("@");
  let localPart = email.substring(0, atIndex).replace(/\.|\+/g, ""); // Remove "+" and "." before "@"

  // Preserve a single period (".") at the end of the local part if necessary
  if (localPart.endsWith(".")) {
    localPart = localPart.slice(0, -1); // Remove trailing period if more than one
  }

  const domainPart = email.substring(atIndex);

  // Recombine local and domain part
  const formattedEmail = `${localPart}${domainPart}`;

  return formattedEmail;
}
