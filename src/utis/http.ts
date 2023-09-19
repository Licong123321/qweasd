import axios from "axios";

const ins = ({
    baseURL: 'http://backend-api-01.newbee.ltd/api/v1/',
    timeout: 1000,
  });

  class Request {
    interen: any;
    constructor(config: any){
        this.interen = axios.create(config);

         this.interen.interceptors.request.use(function (config: any) {
        // 在发送请求之前做些什么
        return config;
      }, function (error: any) {
        // 对请求错误做些什么
        return Promise.reject(error);
      });
    
    // 添加响应拦截器
    this.interen.interceptors.response.use(function (response: any) {
        // 对响应数据做点什么
        return response;
      }, function (error :any) {
        // 对响应错误做点什么
        return Promise.reject(error);
      });
    }
    get(url:string ,params:any) {
        return this.interen.get(url,{params})
    }
    post(url:string,params:any) {
        return this.interen.post(url,params)
    }

  }
  export default new Request(ins)
  // 添加请求拦截器
