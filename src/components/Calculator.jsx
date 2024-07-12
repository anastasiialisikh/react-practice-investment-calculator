import { useState } from 'react'
import classes from './Calculator.module.css'

function Calculator({ onCalculate }) {
	const initData = {
		currentSavings: 23423,
		yearlySavings: 343,
		interest: 9,
		duration: 10
	}

	const [inputData, setInputData] = useState(initData)

	const inputChangeHandler = (fieldName, event) => {
		setInputData((prevState) => {
			return {
				...prevState,
				[fieldName]: event.target.value
			}
		})
	}

	const resetHandler = () => {
		setInputData(() => initData)
	}

	const submitHandler = (event) => {
		event.preventDefault()

		onCalculate(inputData)
	}

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<div className={classes.inputGroup}>
				<p>
					<label htmlFor="current-savings">Current Savings ($)</label>
					<input type="number" id="current-savings"
						value={inputData.currentSavings}
						onChange={inputChangeHandler.bind(null, 'currentSavings')} />
				</p>
				<p>
					<label htmlFor="yearly-contribution">Yearly Savings ($)</label>
					<input type="number" id="yearly-contribution"
						value={inputData.yearlySavings}
						onChange={inputChangeHandler.bind(null, 'yearlySavings')}
					/>
				</p>
			</div>
			<div className={classes.inputGroup}>
				<p>
					<label htmlFor="expected-return">
						Expected Interest (%, per year)
					</label>
					<input type="number" id="expected-return"
						value={inputData.interest}
						onChange={inputChangeHandler.bind(null, 'interest')}
					/>
				</p>
				<p>
					<label htmlFor="duration">Investment Duration (years)</label>
					<input type="number" id="duration"
						value={inputData.duration}
						onChange={inputChangeHandler.bind(null, 'duration')}
					/>
				</p>
			</div>
			<p className={classes.actions}>
				<button type="reset" className={classes.buttonAlt} onClick={resetHandler}>
					Reset
				</button>
				<button type="submit" className={classes.button}>
					Calculate
				</button>
			</p>
		</form>
	)
}

export default Calculator