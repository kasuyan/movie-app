import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { createGlobalStyle } from 'styled-components';

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
