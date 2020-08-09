import React from 'react';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import store from './store';
import Router from './router';

configure({ enforceActions: 'always' });  // 严格模式

function App() {
  return (
    <Provider { ...store }>
      <ConfigProvider locale={ zhCN }>
        <Router></Router>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
