import $ from 'jquery';
 
global.jQuery = $;
global.$ = $;

import '../scss/style.scss';

import 'bootstrap';

require.context('../blocks/', true, /\.(png|gif|svg|jpg|jpeg)$/);
require.context('../img/', true, /\.(png|gif|svg|jpg|jpeg)$/);

$('#btn-tooltip').tooltip();

