function calcular(operacion) {
  let a = parseFloat(document.getElementById('num1').value) || 0;
  let b = parseFloat(document.getElementById('num2').value) || 0;
  let resultado;

  switch (operacion) {
    case '+':
      resultado = a + b;
      break;
    case '-':
      resultado = a - b;
      break;
    case '*':
      resultado = a * b;
      break;
    case '/':
      resultado = b !== 0 ? a / b : 'No se puede dividir entre 0';
      break;
  }

  document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
}
```
