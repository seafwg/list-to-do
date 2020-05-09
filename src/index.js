import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import {mainRoutes} from './routes/Index'
import App from './App'

// import Login from './pages/Login';
// import List from './pages/admin/products/List';

/**
 * //? Switch 全文每一个路由只匹配一次
 */
ReactDOM.render(
  <Router>
    <Switch>
      {/* <Route path="/login" component={Login}></Route>
      <Route path='/admin/products' component={List}></Route> */}
      {/* 所有admin路径走这里： */}
      <Route path='/admin' render={routeProps => <App {...routeProps}></App>}></Route>
      {
        mainRoutes.map(route => {
          return <Route key={route.path} {...route}></Route>
        })
      }
      {/* 默认路由设置 */}
      <Redirect to="/admin" from="/" />
      <Redirect to="/404" />
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
