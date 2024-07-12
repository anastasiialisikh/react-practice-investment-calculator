import classes from './Results.module.css'

function Results({ yearlyData, initialInvestment }) {
	return (
		<>
			{yearlyData.length === 0 &&
				<p className={classes.center}>There is no data available. Fill form above for calculation.</p>
			}
			{yearlyData.length > 0 &&

				<table className={classes.result}>
					<thead>
						<tr>
							<th>Year</th>
							<th>Total Savings</th>
							<th>Interest (Year)</th>
							<th>Total Interest</th>
							<th>Invested Capital</th>
						</tr>
					</thead>
					<tbody>
						{yearlyData.map(data => (
							<tr key={data.year}>
								<td>{data.year}</td>
								<td>$ {data.savingsEndOfYear.toFixed(2)}</td>
								<td>$ {data.yearlyInterest.toFixed(2)}</td>
								<td>$ {(data.savingsEndOfYear -
									initialInvestment -
									data.yearlyContribution * data.year)
									.toFixed(2)}</td>
								<td>$ {(initialInvestment +
									data.yearlyContribution * data.year)
									.toFixed(2)}</td>
							</tr>
						))}
					</tbody>
				</table>
			}
		</>
	)
}

export default Results