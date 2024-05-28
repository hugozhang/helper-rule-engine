// http.js 或 http.ts，取决于你使用的是 JavaScript 还是 TypeScript
import axios from 'axios';
import { message } from 'antd'; // 如果你使用 Ant Design 的 message 组件来显示提示

// 创建一个 axios 实例
const http = axios.create({
  // 基础 URL
//   baseURL: 'http://127.0.0.1:8099',
  // 超时时间，单位为毫秒
  timeout: 10000,
});

// 请求拦截器
http.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么（例如设置 token）
    config.headers.Authorization = `Bearer your-token`;
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
http.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    // 例如，你可以在这里检查响应状态码并根据需要处理错误
    if (response.data.code !== 0) {
      message.error(response.data.message || 'Error');
      return Promise.reject(new Error(response.data.message || 'Error'));
    }
    return response.data;
  },
  error => {
    // 对响应错误做些什么
    message.error('网络错误，请稍后再试');
    return Promise.reject(error);
  }
);

// 封装 get 请求
const get = (url, params) => {
  return http.get(url, { params });
};

// 封装 post 请求
const post = (url, data) => {
  return http.post(url, data);
};

// 导出工具类
export default {
  get,
  post,
  // 可以添加更多方法，如 put, delete 等
};