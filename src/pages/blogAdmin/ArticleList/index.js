
import { Table, Input, Tabs  } from 'antd';
import style from'./index.module.less'
import { articleGetListApi } from'@/api/article.js'
import { useState, useEffect } from 'react';
import { dateFormat } from'@/utils/tool.js'
const { Search } = Input;
const { TabPane } = Tabs;
const columns =[
  {
    title: '标题',
    dataIndex: 'title',
  },
  {
    title: '创建时间',
    dataIndex: 'creationTime',
    render: (text) => <span>{dateFormat( new Date(text))}</span>,
  },
  {
    title: '更新时间',
    dataIndex: 'creationTime',
    render: (text) => <span>{dateFormat( new Date(text))}</span>,
  },
]

function ArticleList(){
  const [data,setData] = useState([])
  const [total,setTotal] = useState(0)
  const [param,setParam] = useState({
    pageIndex:1,
    pageSize:10,
    type:null,  //文章类型
    status:null,
    keyword:null
  })

  //加载
  const onLad=()=>{
    articleGetListApi(param).then(res=>{
      console.log(res);
      if(res.code == 0){
        setData(res.data.list)
        setTotal(res.data.total)
      }
    })
  }
  //搜索输入框发生改变
  const keywordChange = (e)=>{
    console.log(e.target.value);
    setParam({
      ...param,
      keyword:e.target.value
    })
  }
  //切换tab页
  const onChange =(e)=>{
    let status = e === "null"?null:parseInt(e);
    setParam({
      ...param,
      status:status
    })
  }
  //分页
  const onChangePage = (pageNumber,pageSize) =>{
    console.log(pageNumber);
    setParam({
      ...param,
      pageIndex:pageNumber,
      pageSize:pageSize
    })
  }
  //搜索
  const onSearch = (e)=>{
    setParam({
      ...param,
      keyword:e,
    })
  }
  useEffect(()=>{
    onLad()
  },[param])

  return <div className={ style.articleList }>
    <div className={style.search}>
      <Search placeholder="请输入标题" onSearch={e=>onSearch(e)}  enterButton />
    </div>
    <div className={style.content}>
      <Tabs defaultActiveKey={null} size="small" onChange={e=>onChange(e)}>
        <TabPane tab="全部" key={null}>
        </TabPane>
        <TabPane tab="已发布" key="1">
        </TabPane>
        <TabPane tab="未发布" key="0">
        </TabPane>
      </Tabs>
      <Table 
        columns={columns} 
        dataSource={data} 
        rowKey={record=>record._id}
        pagination={{
          total:total,
          showSizeChanger:true,
          onChange:onChangePage,
          pageSize:param.pageSize,
          pageSizeOptions:[5, 10, 20, 30]
        }}
        bordered
        size="small"/>
    </div>
  </div>
}

export default ArticleList