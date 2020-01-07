import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { createGlobalStyle } from 'styled-components';

/*
#8C2730
#F2A0B6
#F2DF80
#D9BC66
#735C32
*/
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #F2DF80;
    color: #735C32;
  }
`;

ReactDOM.render(
	<BrowserRouter>
		<GlobalStyle />
		<Routes />
	</BrowserRouter>,
	document.getElementById('app')
);
