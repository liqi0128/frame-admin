import {
  postAction,
  getAction,
  getJoinAction
} from './manage'

export const articleGetListApi = data =>getAction('/article/getList',data)//文章列表
export const articleAddApi = data =>postAction('/article/add',data)//添加文章
export const articleDeleteApi = data =>postAction('/article/del',data)//删除
export const getArticleApi = data =>getJoinAction('/article/getArticle/{articleId}',data)//获取文章
export const articleUpdateApi = data =>postAction('/article/update',data)//文章更新