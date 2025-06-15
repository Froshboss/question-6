  const input = document.getElementById('sentence');
  const cleanedDiv = document.getElementById('cleaned');
  const resultDiv = document.getElementById('result');

  input.addEventListener('input', () => {
    resultDiv.textContent = '';
    resultDiv.className = 'result';
    cleanedDiv.textContent = '';
  });

  function cleanText(text) {
    return text.toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  function checkPalindrome() {
    const original = input.value.trim();

    if (!original) {
      resultDiv.textContent = 'Please enter a sentence.';
      resultDiv.classList.add('invalid');
      return;
    }

    const cleaned = cleanText(original);
    const reversed = cleaned.split('').reverse().join('');

    cleanedDiv.textContent = `Cleaned: ${cleaned}`;

    if (cleaned === reversed) {
      resultDiv.textContent = "✅ Yes, it’s a palindrome!";
      resultDiv.classList.add('valid');
    } else {
      resultDiv.textContent = "❌ No, it’s not a palindrome.";
      resultDiv.classList.add('invalid');
    }
  }
