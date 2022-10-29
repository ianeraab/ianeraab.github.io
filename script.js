// Calcula o lançamento vertical
function lanVertical(){
    var vel = document.getElementById('velocidade').value;
    var g = 10
    document.getElementById('saidaUm').innerHTML = `Tempo = ${(vel / g)}`
    document.getElementById('saidaDois').innerHTML = `Altura máxima = ${(vel * vel) / 2 * g}`;
}

//Calcula o ponto de máximo/mínimo
function pontoMaxMin() {
	var d = document.getElementById("a")
	var e = document.getElementById("b")
	var f = document.getElementById("c")
	var resultado = document.getElementById("resultadoFinal")

	var det = (-e.value) ** 2 - 4 * d.value * f.value
    var Xv = (-e.value) / (2 * d.value)
    var Yv = -(det / (4 * d.value))

    let respostaUm = `(${Xv}, ${Yv})`

	resultado.innerHTML += `Xv e Yv = ${(respostaUm)}`
	return respostaUm
}

//Calcula a temperatura
function temperatura(){
    var num = parseInt(document.getElementById("num").value);
    var resp = document.getElementById("respostaDois");
    
    if(document.getElementById("CparaF").checked===true)
    resp.innerHTML = cparaf(num);
    
    if(document.getElementById("FparaC").checked===true)
    resp.innerHTML = fparac(num);
}

/* Celsius para Fahrenheit */
function cparaf(x){
    return (1.8 * x + 32);
}

/* Fahrenheit para Celsius */
function fparac(x){
    return ((x - 32) * 5 / 9);
}

// Calcula o consumo de energia
function consEnergia(){
	let quant = document.getElementById("q").value;
	let unit = document.getElementById("v").value;
	let eletrTotal = quant * unit;

	if (quant > 100){
		eletrTotal = eletrTotal + (eletrTotal * 0.25)
	}
    
    else if (quant > 200){
		eletrTotal = eletrTotal + (eletrTotal * 0.50)
		return eletrTotal
	}
	document.getElementById("respostaTres").innerHTML = `O preço da conta de luz desse mês é de R$${eletrTotal}`
}