
import { Space, Table, Tag } from 'antd';
import style from'./index.module.less'
import { articleGetListApi } from'@/api/article.js'
function ArticleList(){
  articleGetListApi({pageIndex:0,pageSize:2}).then(res=>{
    console.log(res);
  })
  return <div className={ style.articleList }>
    文章列表
  </div>
}

export default ArticleList