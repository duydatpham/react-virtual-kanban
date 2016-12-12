import React from 'react';
import ReactDOM from 'react-dom';
import Perf from 'react-addons-perf';

// TODO: Bundle react virtualized styles inside styles.css
import 'react-virtualized/styles.css';
import '../styles.css';

import { generateLists } from './utils/generate_lists';

import App from './App';

window.Perf = Perf;

ReactDOM.render(
  <App lists={generateLists(20, 5)} />,
  document.getElementById('root')
);