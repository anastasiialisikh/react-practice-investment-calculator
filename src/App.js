import { useState } from 'react'

import Header from './components/Header'
import Calculator from './components/Calculator'
import Results from './components/Results'


function App() {
	const [yearlyData, setYearlyData] = useState([])
	const [initialInvestment, setInitialInvestment] = useState(0)

	const calculateHandler = (userInput) => {
		// Should be triggered when form is submitted
		// You might not directly want to bind it to the submit event on the form though...

		setInitialInvestment(+userInput.currentSavings)

		const resultsData = []; // per-year results

		let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
		const yearlyContribution = +userInput.yearlySavings; // as mentioned: feel free to change the shape...
		const expectedReturn = +userInput.interest / 100;
		const duration = +userInput.duration;

		// The below code calculates yearly results (total savings, interest etc)
		for (let i = 0; i < duration; i++) {
			const yearlyInterest = currentSavings * expectedReturn;
			currentSavings += yearlyInterest + yearlyContribution;
			resultsData.push({
				// feel free to change the shape of the data pushed to the array!
				year: i + 1,
				yearlyInterest: yearlyInterest,
				savingsEndOfYear: currentSavings,
				yearlyContribution: yearlyContribution,
			});
		}

		console.log(resultsData)
		setYearlyData(() => [...resultsData])

		// do something with yearlyData ...
	};

	return (
		<div>
			<Header />
			<Calculator onCalculate={calculateHandler} />
			<Results yearlyData={yearlyData} initialInvestment={initialInvestment} />

		</div>
	);
}

export default App;
