const monthSalary = document.getElementById('monthlySalary')
const button = document.getElementById('btn')
const output = document.getElementById('answer')


const rate = 0.06
const year = 2

const lanCalculator = (salary) => {
    return ((rate / year) * salary)
}

button.addEventListener('click', (e) => {
    e.preventDefault()
    const salary = +monthSalary.value
    const result = lanCalculator(salary)
    output.innerText = result
})