import { useCallback, useState, useEffect, useRef } from 'react';

function App() {
	const [length, setLength] = useState(8);
	const [numberAllowed, setNumberAllowed] = useState(false);
	const [specialCharacterAllowed, setSpecialCharacterAllowed] =
		useState(false);
	const [password, setPassword] = useState('');

	// using useRed Hook for manipulating and showing select password
	const passwordRef = useRef(null);

	// generate random password
	// used useCallBack Hook for optimization
	const generatePassword = useCallback(() => {
		let pass = '';
		let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		if (numberAllowed) str += '0123456789';
		if (specialCharacterAllowed) str += '!@#$%^&*';
		for (let i = 0; i < length; i++) {
			pass += str.charAt(Math.floor(Math.random() * str.length + 1));
		}
		setPassword(pass);
	}, [length, numberAllowed, specialCharacterAllowed, setPassword]);

	const copyToClipboard = useCallback(() => {
		passwordRef.current?.select();
		window.navigator.clipboard.writeText(passwordRef.current.value);
	}, [password]);

	// using useEffect Hook for re-rendering if length, numberAllowed, specialCharacterAllowed changes
	useEffect(() => {
		generatePassword();
	}, [length, numberAllowed, specialCharacterAllowed, generatePassword]);
	return (
		<div className="bg-slate-900 flex w-full h-screen justify-center text-white items-center">
			<div className="bg-gray-600 w-2/3 h-2/5 flex flex-col justify-center rounded-xl">
				<h1 className="text-center text-4xl mb-6 text-orange-600 font-bold">
					Password Manager
				</h1>
				<div className="flex justify-center mb-4 mx-8">
					<input
						className="w-full h-20 bg-slate-300 px-4 text-black text-lg rounded-l-xl outline-none"
						type="text"
						value={password}
						ref={passwordRef}
						readOnly
						placeholder="generate random password"
					></input>
					<button
						className="bg-blue-500 w-24 rounded-r-xl"
						onClick={copyToClipboard}
					>
						Copy
					</button>
				</div>
				<div className="flex justify-evenly">
					<div className="flex">
						<input
							className="mx-2"
							type="range"
							name="length"
							min={8}
							max={100}
							value={length}
							onChange={(e) => {
								setLength(e.target.value);
							}}
						/>
						<label
							className="text-orange-600 text-lg font-semibold"
							htmlFor="length"
						>
							Length: {length}
						</label>
					</div>
					<div className="flex">
						<input
							className="mx-2"
							type="checkbox"
							name="numberAllowed"
							id="numberAllowed"
							value={numberAllowed}
							onChange={() => {
								setNumberAllowed((prev) => !prev);
							}}
						/>
						<label
							className="text-orange-600 text-lg font-semibold"
							htmlFor="numberAllowed"
						>
							Number
						</label>
					</div>
					<div className="flex">
						<input
							className="mx-2"
							type="checkbox"
							name="specialCharacterAllowed"
							id="specialCharacterAllowed"
							value={specialCharacterAllowed}
							onChange={() => {
								setSpecialCharacterAllowed((prev) => !prev);
							}}
						/>
						<label
							className="text-orange-600 text-lg font-semibold"
							htmlFor="specialCharacterAllowed"
						>
							Special Character
						</label>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
