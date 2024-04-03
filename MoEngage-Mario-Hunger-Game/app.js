// All the variables are declared here
let numberOfRows, numberOfCoumns, body, table, tr, td, text;

// Function to take the input as rows and columns
function askForInput(message, inputVariable){
	return prompt(message, inputVariable);
}

function createDomElement(name){
	return document.createElement(name);
}

// Asking for Input From user to create the box of arrays
numberOfRows = askForInput("Enter the number of rows you want to appear in array: ", numberOfRows);
numberOfCoumns = askForInput("Enter the number of columns you want to appear in array: ", numberOfCoumns);

console.log("No of rows is = ", numberOfRows, "No of coumns is = ", numberOfCoumns);

// Creating table structure and the boxes
game = document.querySelector('.game');
table = createDomElement('table');

for(let i = 0; i < numberOfRows; i++){
	tr = createDomElement('tr');
	table.appendChild(tr);
	for(let j = 0; j < numberOfCoumns; j++){
		td = createDomElement('td');
		text = document.createTextNode(i+","+j);
		td.appendChild(text);
		random1 = Math.random()
		tr.appendChild(td);
	}
}

game.appendChild(table);
document.querySelector('table').classList.add('table-bordered')
