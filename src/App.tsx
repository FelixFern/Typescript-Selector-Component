import React, { useState } from 'react'
import { Select } from './components/Select'

const options = [
	{ label: "Test 1", value: 1 },
	{ label: "Test 2", value: 2 },
	{ label: "Test 3", value: 3 },
	{ label: "Test 4", value: 4 },
	{ label: "Test 5", value: 5 },
]

const App = () => {
	const [value, setValue] = useState<typeof options[0] | undefined>(options[0])
	return (
		<>
			<h1>Typescript Multiple Selector</h1>
			<Select options={options} value={value} onChange={o => setValue(o)}/>
		</> 	
	)
}

export default App