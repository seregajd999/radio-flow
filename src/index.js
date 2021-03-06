import 'core-js/es6/map';
import 'core-js/es6/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vkui-connect';
import bridge from '@vkontakte/vk-bridge';
import App from './App';
import './index.css';
import '@vkontakte/vkui/dist/vkui.css';
// import 'antd/dist/antd.css';
// import registerServiceWorker from './sw';

// Init VK App
connect.send('VKWebAppInit', {});



// Если вы хотите, чтобы ваше веб-приложение работало в оффлайне и загружалось быстрее,
// расскомментируйте строку с registerServiceWorker();
// Но не забывайте, что на данный момент у технологии есть достаточно подводных камней
// Подробнее про сервис воркеры можно почитать тут — https://vk.cc/8MHpmT 
 // registerServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'));
