var ans;
var operand1=0;
var operand2=0;
var operandArray=[0];
var operator=0;
var onFirst=true;
var decimalPoint=false;
var disp = document.getElementById("display");

function inputDigit(digit){
	if (digit === "."){
		if(decimalPoint){
			return;
		} else {
			decimalPoint = true;
		}
	}
	operandArray.push(digit);
	setOperand();
}

function delKey(){
	if (operandArray.length > 1){
		var popped = operandArray.pop();
		if (popped === "."){
			decimalPoint = false;
		}
		setOperand();
	}
}

function setOperand(){
	var operand = Number(operandArray.join(""));
	if (onFirst){
		operand1 = operand;
		operator = 0;
	} else {
		operand2 = operand;
	}
	display(operand);
}

function ansKey(){
	if (ans != undefined){
		if (onFirst){
			operand1 = ans;
			operator = 0;
		} else {
			operand2 = ans;
		}
		clearOperandArray();
		display(ans);
	}
}

function setOperator(toSet){
	if (!onFirst){
		operand1 = calculate();
	}
	operator = toSet;
	clearOperandArray();
	onFirst = false;
}

function calculate(){
	switch (operator){
		case 0:
			ans = operand1;
			break;
		case 1:
			ans = operand1 + operand2;
			break;
		case 2:
			ans = operand1 - operand2;
			break;
		case 3:
			ans = operand1 * operand2;
			break;
		case 4:
			ans = operand1 / operand2;
			break;
	}
	operand1 = ans;
	onFirst = true;
	display(ans);
	clearOperandArray();
	return ans;
}

function clearKey(){
	onFirst = true;
	clearOperandArray();
	operand1 = 0;
	operand2 = 0;
	operator = 0;
	display(operand1);
}

function clearOperandArray(){
	operandArray=[0];
}

function display(toDisplay){
	disp.replaceChild(document.createTextNode(toDisplay), disp.firstChild);
}

