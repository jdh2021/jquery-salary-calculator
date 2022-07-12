console.log('javascript sourced');

$(document).ready(readyNow);

const employeesArray = [];

function readyNow() {
    console.log('jquery sourced');
    $('#add-employee-button').on('click', getEmployeeInput)
}

function getEmployeeInput () {
    console.log('in getEmployeeInput');
    const employeeObject = {
        firstName: $('#first-name').val(),
        lastName: $('#last-name').val(),
        idNumber: parseInt($('#id-number').val()),
        jobTitle: $('#job-title').val(),
        annualSalary: parseInt($('#annual-salary').val()),
    }
    employeesArray.push(employeeObject);
    console.log(employeesArray);
    displayEmployees(employeesArray);
    totalMonthlyCost(employeesArray);
}

function displayEmployees(array) {
    $('#employee-output').empty();
    for (let employee of array) {
        $('#employee-output').append(`
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.idNumber}</td>
                <td>${employee.jobTitle}</td>
                <td>$${employee.annualSalary}</td>
                <td><button class="delete-button">Delete</button></td>
            </tr>
        `);
    }
    $('input').val('');
}

function totalMonthlyCost(array) {
    $('#monthly-cost-output').empty();
    let monthlyEmployeeCosts = 0;
    for (let employee of array) {
        monthlyEmployeeCosts+=employee.annualSalary/12;
        $('#monthly-cost-output').html(`
            <tr>
                <td><h3>Total Monthly Costs: $${monthlyEmployeeCosts}</h3></td>
            </tr>`);
    } 
    if (monthlyEmployeeCosts > 20000 ) {
        $('#monthly-cost-output').addClass("red-background");
    console.log(monthlyEmployeeCosts);
    }
}