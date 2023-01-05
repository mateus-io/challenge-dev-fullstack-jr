import axios, { AxiosInstance } from 'axios'
import {
  ApiBase,
  ApiParams,
  ApiQueryAble,
  ApiResponse,
  CreateApiInstanceParams,
  defaultHeaders,
} from '../Api'

export class Axios implements ApiBase<AxiosInstance>, ApiQueryAble {
  instance
  constructor({ baseURL, headers = defaultHeaders }: CreateApiInstanceParams) {
    this.instance = axios.create({
      baseURL,
      headers,
    })
  }
  async get<T>({ endpoint, headers }: ApiParams): Promise<ApiResponse<T>> {
    try {
      const response = await this.instance.get<T>(endpoint, {
        headers,
      })
      return { status: 200, data: response.data }
    } catch (error: unknown) {
      return { status: 400, error: error as Error }
    }
  }
}
