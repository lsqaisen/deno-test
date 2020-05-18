import React from 'https://dev.jspm.io/react';
// import { Commpoent } from 'https://dev.jspm.io/react.d.ts';

export interface AppProps {
  text: String;
}

const App = ({ text }: AppProps) => {
  return <>{text} texdssdd3</>;
};

// class App extends Commpoent<any, any> {
//   componentDisMount() {
//     console.log(window.document);
//   }
//   render() {
//     console.log(this);
//     return <> texdssdd3</>;
//   }
// }

export default App;
