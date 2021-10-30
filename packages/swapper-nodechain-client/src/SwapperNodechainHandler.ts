import {
  ErrorResponse,
  HttpClientError,
  Response,
  ResponseHandler,
  ErrorNodechain
} from './http/HttpClientInterface'

export default class SwapperNodechainHandler implements ResponseHandler {
  handle<T> (response: Promise<Response<T>>): Promise<T> {
    return response.then(
      (res) => this.handleSuccessResponse<T>(res),
      (error) => this.handleErrorResponse(error)
    )
  }

  private handleSuccessResponse<T> (response: Response<T>): T {
    return response.data
  }

  private handleErrorResponse (
    error: HttpClientError<ErrorResponse<ErrorNodechain>>
  ): never {
    if (error.response?.data?.error) {
      throw new Error(error.response?.data?.error?.message)
    }
    throw new Error(error.message)
  }
}
