const output = document.getElementById('output');
const copyBtn = document.getElementById('copyBtn');
const generateBtn = document.getElementById('generateBtn');

const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "!@#$%^&*()_+-=[]{}|;:,.<>?/";

const getRandomChar = (set) => set[Math.floor(Math.random() * set.length)];

const generatePassword = () => {
  const length = document.getElementById('length').value;
  const includeUpper = document.getElementById('upper').checked;
  const includeLower = document.getElementById('lower').checked;
  const includeNumber = document.getElementById('number').checked;
  const includeSymbol = document.getElementById('symbol').checked;

  let validChars = '';
  if (includeUpper) validChars += upperSet;
  if (includeLower) validChars += lowerSet;
  if (includeNumber) validChars += numberSet;
  if (includeSymbol) validChars += symbolSet;

  if (!validChars) {
    output.value = "Select at least one option";
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    password += getRandomChar(validChars);
  }

  output.value = password;
};

generateBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', () => {
  output.select();
  document.execCommand('copy');
  alert("Password copied to clipboard!");
});
