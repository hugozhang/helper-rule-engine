
import React, {Component} from "react";
import ReactDOM from "react-dom";
const Demo = React.lazy(() => import("./demo"));
const DemoSwitch = React.lazy(() => import("./demo_switch"));

const TableWithRemoteData = React.lazy(() => import("./rule"));

import { ConfigProvider } from "antd"
import zhCN from "antd/lib/locale/zh_CN"


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import "../css/antd.less"; // or import "antd/dist/antd.css";
import "../css/styles.scss";
//import '../css/compact_styles.scss'; //optional

const rootElement = window.document.getElementById("root");

ReactDOM.render((
  <BrowserRouter basename={location.host == "ukrbublik.github.io" ? "/react-awesome-query-builder" : "/"}>
    <Routes>
      <Route path="/switch" element={<React.Suspense fallback={<>...</>}><DemoSwitch /></React.Suspense>} />
      <Route path="/abc" element={<React.Suspense fallback={<>...</>}>
          <ConfigProvider locale={zhCN}>
            <TableWithRemoteData />
          </ConfigProvider>
        </React.Suspense>} />
      <Route path="*" element={<React.Suspense fallback={<>...</>}><Demo /></React.Suspense>} />
    </Routes>
  </BrowserRouter>
), rootElement);
