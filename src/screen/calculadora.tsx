import React, { useState } from 'react';


interface Operation {
  suma: 1;
  restar: 2;
  multiplicacion: 3;
  division: 4;
}

const calculadora: React.FC<{ a: number; b: number; operation: Operation }> = ({
  a,
  b,
  operation,
}) => {
  const [result, setResult] = useState(0);

  const calculate = () => {
    switch (operation) {
      case Operation.suma:
        setResult(a + b);
        break;
      case Operation.resta:
        setResult(a - b);
        break;
      case Operation.multiplicacion:
        setResult(a * b);
        break;
      case Operation.division:
        if (b === 0) {
          alert('No se puede dividir por cero.');
          return;
        }
        setResult(a / b);
        break;
      default:
        break;
    }
  };

  return (
    <View>
      <p>Valor de a: {a}</p>
      <p>Valor de b: {b}</p>
      <p>Operación: {operation === Operation.suma ? 'Suma' : operation === Operation.resta ? 'Resta' : operation === Operation.multiplicacion ? 'Multiplicación' : 'División'}</p>
      <button onClick={calculate}>Calcular</button>
      {result !== 0 && <p>Resultado: {result}</p>}
    </View>
  );
};

export default calculadora;
