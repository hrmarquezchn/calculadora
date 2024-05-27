import React from 'react';
import Calculadora from './src/screens/Calculadora';

const App: React.FC = () => {
  return (
    <View>
      <Calculadora a={10} b={5} operation={Operation.suma} />
      <Calculadora a={10} b={5} operation={Operation.restar} />
      <Calculadora a={10} b={5} operation={Operation.multiplicacion} />
      <Calculadora a={10} b={2} operation={Operation.division} />
    </View>
  );
};

export default App;