/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios from 'axios'
import {
  HttpClient,
  RequestConfigBuilder,
  RequestConfig,
  ResponseHandler
} from './HttpClientInterface'

export default class AxiosClient implements HttpClient {
  private responseHandler: ResponseHandler
  private requestConfigBuilder: RequestConfigBuilder

  constructor ({
    responseHandler,
    requestConfigBuilder
  }: {
    responseHandler: ResponseHandler;
    requestConfigBuilder: RequestConfigBuilder;
  }) {
    this.responseHandler = responseHandler
    this.requestConfigBuilder = requestConfigBuilder
  }

  public async get<T extends object> (path: string, params: any) {
    const requestConfig = await this.requestConfigBuilder.build(
      'get',
      path,
      params
    )
    return (await this.sendRequest(requestConfig)) as Promise<T>
  }

  public async post<T extends object> (path: string, params: any) {
    const requestConfig = await this.requestConfigBuilder.build(
      'post',
      path,
      params
    )
    return (await this.sendRequest(requestConfig)) as Promise<T>
  }

  public async put<T extends object> (path: string, params: any) {
    const requestConfig = await this.requestConfigBuilder.build(
      'put',
      path,
      params
    )
    return (await this.sendRequest(requestConfig)) as Promise<T>
  }

  public async delete<T extends object> (path: string, params: any) {
    const requestConfig = await this.requestConfigBuilder.build(
      'delete',
      path,
      params
    )
    return (await this.sendRequest(requestConfig)) as Promise<T>
  }

  private sendRequest (requestConfig: RequestConfig) {
    return this.responseHandler.handle(
      Axios({
        ...requestConfig,
        maxBodyLength: Infinity,
        maxContentLength: Infinity
      })
    )
  }
}
