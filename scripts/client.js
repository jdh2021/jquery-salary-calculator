console.log('javascript sourced');

$(document).ready(readyNow);

const employeesArray = [];

function readyNow() {
    console.log('jquery sourced');
    $('#add-employee-button').on('click', getEmployeeInput);
    $('body').on('click', '.delete-button', deleteEmployee);
}

function getEmployeeInput() {
    console.log('in getEmployeeInput');
    if ($('#first-name').val() === '' || $('#last-name').val() === '' || $('#id-number').val() === '' || $('#job-title').val() === '' ||  $('#annual-salary').val() === '') {
        alert('Please complete all fields to add an employee.');
    } else { 
        const employeeObject = {
            firstName: $('#first-name').val(),
            lastName: $('#last-name').val(),
            idNumber: Number($('#id-number').val()),
            jobTitle: $('#job-title').val(),
            annualSalary: Number($('#annual-salary').val()),
        }
        employeesArray.push(employeeObject);
        console.log(employeesArray);
        displayEmployees(employeesArray);
        totalMonthlyCost(employeesArray);
    }
}

function displayEmployees(array) {
    console.log('in displayEmployees');
    $('#employee-output').empty();
    for (let employee of array) {
        $('#employee-output').append(`
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td class="delete-id">${employee.idNumber}</td>
                <td>${employee.jobTitle}</td>
                <td>$${employee.annualSalary.toLocaleString('en', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2})}</td>
                <td><button class="delete-button">Delete</button></td>
            </tr>`);
    }
    $('input').val('');
}

function totalMonthlyCost(array) {
    console.log('in totalMonthlyCost');
    $('#monthly-cost-output').empty();
    let monthlyEmployeeCosts = 0;
    for (let employee of array) {
        monthlyEmployeeCosts+=employee.annualSalary/12; 
    }
    $('#monthly-cost-output').append(`
        <tr>
            <td colspan = "6">Total Monthly Cost: $${monthlyEmployeeCosts.toLocaleString('en', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2})}
            </td>
        </tr>`);
    console.log(monthlyEmployeeCosts);
    if (monthlyEmployeeCosts > 20000 ) {
            $('#monthly-cost-output').addClass("red-background");
            $('#monthly-cost-output').removeClass("blue-background");
    } else if (monthlyEmployeeCosts <= 20000 ) {
            $('#monthly-cost-output').removeClass("red-background");
            $('#monthly-cost-output').addClass("blue-background");
    }
}

function deleteEmployee() {
    console.log('in deleteEmployee');
    $(this).parent().parent().remove(); //accesses table data cell then table row. deletes table row.
    console.log($(this).parent().siblings('.delete-id').text()); //targets table data cell siblings with a class of delete-id and then gets the text
    let employeeId = Number($(this).parent().siblings('.delete-id').text());
    for (let i=0; i<employeesArray.length; i+=1) {
        if (employeeId === employeesArray[i].idNumber) {
            employeesArray.splice([i],1);
        }
    }
    console.log(employeesArray); 
    totalMonthlyCost(employeesArray);
}
  