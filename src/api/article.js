import {
  postAction,
  getAction,
} from './manage'

export const articleGetListApi = data =>getAction('/article/getList',data)//文章列表
export const articleAddApi = data =>postAction('/article/add',data)//添加文章
export const articleDeleteApi = data =>postAction('/article/del',data)//删除