//用户相关的接口
import request from '@/utils/request'

import type { QueryTypeData } from './type'

enum API {
  LOGIN_URL = '/dredgeMtgl/getMtList.do',
}

export const reqUserInfo = (params: QueryTypeData) => {
  return request.get(API.LOGIN_URL, { params })
}
