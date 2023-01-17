interface ApiResponse<T> {
  status: number
  error?: Error
  data?: T
}

interface ApiKeyValueSet {
  [key: string]: string
}

interface ApiData {
  [key: string]: any
}

interface ApiParams {
  endpoint: string
  data?: ApiData
  headers?: ApiKeyValueSet
  queryParams?: ApiKeyValueSet
}

interface CreateApiInstanceParams {
  baseURL: string
  headers?: ApiKeyValueSet
}

const defaultHeaders = {
  'Content-Type': 'application/json',
}

interface ApiBase<T> {
  instance: T
}

interface ApiQueryAble {
  get<T>(params: ApiParams): Promise<ApiResponse<T>>
}

interface ApiInsertAble {
  post<T>(params: ApiParams): Promise<ApiResponse<T>>
}

interface ApiUpgradeAble {
  put<T>(params: ApiParams): Promise<ApiResponse<T>>
  patch<T>(params: ApiParams): Promise<ApiResponse<T>>
}

interface ApiRemovAble {
  delete<T>(params: ApiParams): Promise<ApiResponse<T>>
}

export type {
  ApiBase,
  ApiData,
  ApiKeyValueSet,
  ApiInsertAble,
  ApiParams,
  ApiQueryAble,
  ApiRemovAble,
  ApiResponse,
  ApiUpgradeAble,
  CreateApiInstanceParams,
}

export { defaultHeaders }
