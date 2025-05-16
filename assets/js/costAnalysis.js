function updateText(value) {
    document.getElementById('outputMathText').textContent=value
    const {savings, text} = generateAnalysis(value)
    const costAnalysisObject = document.getElementById('costAnalysis')
    costAnalysisObject.textContent=text
    if (savings) {
        costAnalysisObject.classList.add('savingMoney')
        costAnalysisObject.classList.remove('losingMoney')
    } else {
        costAnalysisObject.classList.add('losingMoney')
        costAnalysisObject.classList.remove('savingMoney')
    }
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  trailingZeroDisplay: 'stripIfInteger',
  maximumFractionDigits: 0
});

function generateAnalysis(value) {
    const publicStudentSubsidy = 7281
    const privateStudentSubsidy = 1140
    const numberOfPrivateStudents = 95614
    const proposedSavings = 109000000
    const costPerStudentMovingToPublic = publicStudentSubsidy - privateStudentSubsidy
    const studentsMoving = value/100*numberOfPrivateStudents
    const totalCostOfMovement = costPerStudentMovingToPublic * studentsMoving
    const resultOnBudget = proposedSavings - totalCostOfMovement

    const formattedDollars = formatter.format(Math.abs(resultOnBudget))
    if (resultOnBudget > 0) {
        return { savings: true, text: 'savings of ' + formattedDollars }
    } else {
        return { savings: false, text: 'loss of ' + formattedDollars }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    updateText(document.getElementById('studentsMoving').value)
});

