import axios, { AxiosInstance } from 'axios'
import { defaultHeaders } from '../Api'
import type {
  ApiBase,
  ApiParams,
  ApiQueryAble,
  ApiResponse,
  CreateApiInstanceParams,
} from '../Api'

export default class Axios implements ApiBase<AxiosInstance>, ApiQueryAble {
  instance

  constructor({ baseURL, headers = defaultHeaders }: CreateApiInstanceParams) {
    this.instance = axios.create({
      baseURL,
      headers,
    })
  }

  async get<T>({
    endpoint,
    headers,
    queryParams,
  }: ApiParams): Promise<ApiResponse<T>> {
    try {
      const response = await this.instance.get<T>(endpoint, {
        headers,
        params: queryParams,
      })
      return { status: 200, data: response.data }
    } catch (error: unknown) {
      return { status: 400, error: error as Error }
    }
  }
}
