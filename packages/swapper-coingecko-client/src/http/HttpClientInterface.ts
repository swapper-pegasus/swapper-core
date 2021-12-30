/* eslint-disable @typescript-eslint/no-explicit-any */
export interface HttpClient {
  get: <T extends object>(path: string, params: object) => Promise<T>;
  post: <T extends object>(path: string, params: object) => Promise<T>;
  put: <T extends object>(path: string, params: object) => Promise<T>;
  delete: <T extends object>(path: string, params: object) => Promise<T>;
}

export type ErrorResponse<T = any> = {
  data: T;
  status: number;
  statusText: string;
  headers: any;
};

export type ErrorCoingecko = {
  error: string
}

export type Response<T = any> = {
  data: T;
  headers: any;
};

export type HttpMethod = 'get' | 'post' | 'put' | 'delete';
export type Params = { [key: string]: unknown };

export interface HttpClientError<T = ErrorResponse> extends Error {
  response?: T;
}
export interface ResponseHandler {
  handle: <T = any>(response: Promise<Response<T>>) => Promise<T>;
}

export type RequestConfig = {
  method: HttpMethod;
  url: string;
  headers: any;
  httpsAgent?: any;
  data?: any;
};

export interface RequestConfigBuilder {
  build: (
    method: HttpMethod,
    path: string,
    params: Params,
    options?: { responseType: 'arraybuffer' }
  ) => Promise<RequestConfig>;
}
