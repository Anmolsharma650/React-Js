import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(4);
  const [numbers, setNumbers] = useState(false);
  const [chr, setChr] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerate = useCallback(() => {
    let pass = "";
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numbers) chars += "0123456789";
    if (chr) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      pass += chars[randomIndex];
    }
    setPassword(pass);
  }, [length, numbers, chr, setPassword]);

  useEffect(() => {
    passwordGenerate();
  }, [length, numbers, chr, passwordGenerate]);

  return (
    <div className="flex justify-center mt-16 px-4">
      <div className="bg-gray-600 w-full max-w-md rounded-3xl p-6 space-y-5 shadow-xl">

        <h1 className="text-2xl font-bold text-center text-white">
          PASSWORD GENERATOR
        </h1>

        {/* Password Display */}
        <div className="flex rounded-lg bg-white overflow-hidden">
          <input
            type="text"
            value={password}
            readOnly
            className="flex-1 px-3 py-2 text-black outline-none"
          />
          <button
            className="bg-purple-900 text-white px-5 font-medium "
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(password);
                alert("Password copied!");
              } catch (err) {
                alert("Copy failed");
              }
            }}
          >
            Copy
          </button>

        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 text-white text-sm">
          <input
            type="range"
            min="4"
            max="10"
            value={length}
            className="flex-1 accent-purple-900"
            onChange={(e) => setLength(Number(e.target.value))}
          />

          <span>Length ({length})</span>

          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={numbers}
              onChange={() => setNumbers(!numbers)}
            />
            Numbers
          </label>

          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={chr}
              onChange={() => setChr(!chr)}
            />
            Chars
          </label>
        </div>
        <div className="mt-4 flex justify-center">
          <button className="bg-purple-900 text-white  px-4 py-2 font-medium rounded-2xl" onClick={passwordGenerate}>Reload</button>
        </div>
      </div>
    </div>
  );
}

export default App;
