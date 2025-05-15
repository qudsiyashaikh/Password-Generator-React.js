
import React, { useState } from 'react';
import Img from "./Componets/password.jpg"
const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState('');

  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

  const handleGeneratePassword = () => {
    let charSet = '';
    if (includeUppercase) charSet += uppercaseChars;
    if (includeLowercase) charSet += lowercaseChars;
    if (includeNumbers) charSet += numberChars;
    if (includeSymbols) charSet += symbolChars;

    if (!charSet) {
      setPassword('');
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[randomIndex];
    }
    setPassword(generatedPassword);
  };

  const handleCopy = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <div className="min-h-screen  p-6 bg-cover flex  w-full overflow-hiddenflex items-center justify-center px-4"
    style={{
          backgroundImage: `url(${Img})`,
          backgroundRepeat:"no-repeat",
          backgroundPosition:"center"
           }}>
      <div className="bg-transparent rounded-xl shadow-purple-900 max-w-md w-full p-6">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Password Generator</h1>

        <div className="mb-4">
          <label htmlFor="length" className="block font-extrabold text-white mb-2">
            Password Length: {length}
          </label>
          <input
            type="range"
            id="length"
            min="6"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="mb-4 space-y-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 font-extrabold text-white">Uppercase Letters</span>
          </label>

          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 font-extrabold text-white">Lowercase Letters</span>
          </label>
<br />
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 font-extrabold text-white"> Numbers</span>
          </label>

          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 font-extrabold text-white">Symbols</span>
          </label>
        </div>

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
          onClick={handleGeneratePassword}
        >
          Generate Password
        </button>

        {password && (
          <div className="mt-6 bg-gray-100 p-4 rounded-md flex items-center justify-between">
            <code className="break-all text-gray-900 font-mono text-lg select-all">{password}</code>
            <button
              onClick={handleCopy}
              aria-label="Copy password to clipboard"
              className="ml-4 bg-blue-600 hover:bg-blue-700 text-white rounded px-3 py-1 text-sm transition"
            >
              Copy
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordGenerator;


