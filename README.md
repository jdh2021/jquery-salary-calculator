# Project Name

Weekend jQuery Salary Calculator

## Checklist

[X] Build out HTML structure including employee output table and placeholders
[X] Create inputs for employee first name, last name, ID #, job title, annual salary
[X] Create buttons to submit employee and delete employee

[X] Get the value of the employee inputs upon button click
[X] Store the employee information in an empty array
[X] Target the output (employee output table) by ID and empty it
[X] Loop through the employee information array to append the value of the 
[X] Inputs to the table data cells in the employee output table
[X] Clear the inputs

[X] Target the output (total monthly cost) by its ID and empty it
[X] Loop the annual salaries to add and divide by 12 to get the value of the total monthly cost
[X] Append the value of the total monthly cost to its ID
[X] Use conditional logic and CSS styling to change the background color for monthly costs exceeding $20,000

[X] Create click event handler with delete button and delete-button class to remove employee record
[X] Use $(this) to traverse the DOM and remove the specific employee row from the employee output table
[X] Retrieve deleted employee ID using $(this) and .siblings(). Search employee array for that ID to remove the employee object
[X] Recalculate total monthly costs by looping through the revised array

## Description

I solved the problem of determining the monthly cost of salaried employees. I solved this by inputting employee information, storing the inputted information in a table, running a calculation on the inputted information and outputting the result into a total monthly cost.
