import qs from 'qs'

import {
  RequestConfigBuilder,
  RequestConfig,
  HttpMethod,
  Params
} from './http/HttpClientInterface'

type Data = Params;

export const THRESHOLD_AVOID_REQUEST_URL_TOO_LARGE = 4096

export default class SwapperCoingeckoConfigBuilder implements RequestConfigBuilder {
  private baseUrl: string
  private headers: object

  constructor ({ baseUrl }: {baseUrl: string;}) {
    this.baseUrl = baseUrl
    this.headers = {}
  }

  public async build (
    method: HttpMethod,
    path: string,
    params: Data,
    options?: { responseType: 'arraybuffer' }
  ) {
    const requestConfig: RequestConfig = {
      method,
      headers: this.headers,
      url: `${this.baseUrl}${path}`,
      ...(options || {})
    }

    switch (method) {
      case 'get': {
        const requestUrl = this.buildRequestUrl(path, params)
        if (requestUrl.length > THRESHOLD_AVOID_REQUEST_URL_TOO_LARGE) {
          return {
            ...requestConfig,
            method: 'post' as const,
            headers: this.headers,
            data: this.buildData(params)
          }
        }
        return {
          ...requestConfig,
          url: requestUrl
        }
      }
      case 'post': {
        return {
          ...requestConfig,
          data: this.buildData(params)
        }
      }
      case 'put': {
        return {
          ...requestConfig,
          data: this.buildData(params)
        }
      }
      case 'delete': {
        const requestUrl = this.buildRequestUrl(
          path,
          this.buildData(params)
        )
        return {
          ...requestConfig,
          url: requestUrl
        }
      }
      default: {
        throw new Error(`${method} method is not supported`)
      }
    }
  }

  private buildRequestUrl (path: string, params: Data): string {
    return `${this.baseUrl}${path}?${qs.stringify(params)}`
  }

  private buildData<T extends Data> (params: T) {
    return params
  }
}
