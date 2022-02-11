function CreateTable() {
	var table = document.createElement('table');
	table.setAttribute('id','empTable');
	//table.setAttribute('class','border');

	var arrHead = new Array();
	arrHead = ['Emp. ID', 'Emp.Name', 'Designation'];

	var arrValue = new Array();
	arrValue.push('1', 'Green Field', 'Accountant');
	arrValue.push('2', 'Arun Banik', 'Project Manager');
	arrValue.push('3', 'Dewane Paul', 'Programmer');

	var tr = table.insertRow(-1);

	for (var h = 0; h < arrHead.length; h++) {
		var th = document.createElement('th');
		th.innerHTML = arrHead['h'];
		tr.appendChild(th);
	}
	for (var c = 0; c <= arrValue.length - 1; c++) {
		tr = table.insertRow(-1);

		for (var j = 0; j < arrHead.length; j++) {
			var td = document.createElement('td');
			td = tr.insertCell(-1);
			td.innerHTML = arrValue[c][j];
		}
	}
	var button = document.createElement('input');
	button.setAttribute('type', 'button');
	button.setAttribute('value', 'Read Table Data');

	button.setAttribute('onclick', 'GetTableValues()');
	
	document.body.appendChild(table);
	document.body.appendChild(button);
}
function GetTableValues() {
	var empTable = document.getElementById('empTable');
	
	var div = document.createElement('div');
	div.innerHTML = "";
	div.innerHTML = '<br/>';
	
	for (var r = 1; r <= empTable.rows.length - 1; r++) {
		for (c = 0; c <= empTable.rows[r].cells.length - 1; c++) {
			div.innerHTML + ' ' + empTable.rows[r].cells[c].innerTHML;
		}
		div.innerHTML = div.innerHTML + '<br/>';
	}
	document.body.appendChild(div);
}
