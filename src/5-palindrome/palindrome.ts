export const isPalindrome = (arr: string): boolean => {
  const palindromo = arr.toLowerCase().replace(/\s+/g, "");

  return palindromo === palindromo.split("").reverse().join("");
};
