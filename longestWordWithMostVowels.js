function longestWordWithMostVowels(sentence) {
  let longestWord = ""; // Initialize the longest word
  let maxVowelCount = 0; // Initialize the maximum vowel count

  const words = sentence.split(" "); // Split the sentence into an array of words

  // Loop through each word in the array
  for (const word of words) {
    const cleanedWord = cleanWord(word);
    const vowelCount = countVowels(cleanedWord);

    // Compare the current word's length with the longest word found so far
    if (cleanedWord.length > longestWord.length) {
      longestWord = cleanedWord;
      maxVowelCount = vowelCount;
    } else if (cleanedWord.length === longestWord.length) {
      // If lengths are the same, compare vowel counts
      if (vowelCount > maxVowelCount) {
        longestWord = cleanedWord;
        maxVowelCount = vowelCount;
      }
    }
  }

  return longestWord;
}

// Helper function to clean a word by removing non-letter characters and converting to lowercase
function cleanWord(word) {
  return word.replace(/[^a-zA-Z]/g, "").toLowerCase();
}

// Helper function to count vowels in a word
function countVowels(word) {
  return (word.match(/[aeiou]/g) || []).length;
}
