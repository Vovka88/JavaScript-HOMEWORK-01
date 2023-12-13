function checkForSpam(message) {
  // Перевести рядок в нижній регістр для порівняння
  const lowerCaseMessage = message.toLowerCase();

  // Перевірити наявність заборонених слів
  if (lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')) {
      return true; // Знайдено заборонене слово
  } else {
      return false; // Заборонених слів немає
  }
}


/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
