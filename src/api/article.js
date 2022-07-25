import {
  postAction,
  getAction,
} from './manage'

export const articleGetListApi = data =>getAction('/article/getList',data)//文章列表