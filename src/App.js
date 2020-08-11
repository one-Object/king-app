import React from 'react';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import store from './store';
import Router from './router';

function App() {
  return (
    <Provider store={ store }>
      <ConfigProvider locale={ zhCN }>
        <Router></Router>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
