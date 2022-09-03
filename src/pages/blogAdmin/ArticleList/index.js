
import style from'./index.module.less'
import { articleGetListApi, articleDeleteApi } from'@/api/article.js'
import { useState, useEffect } from 'react';
import { dateFormat } from'@/utils/tool.js'
import { useNavigate } from 'react-router-dom';
import {
  DeleteOutlined,
  HighlightOutlined,
  SnippetsOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons';
import { 
  Table, 
  Input, 
  Tabs,
  Button,
  Tooltip,
  Popconfirm,
  message
  } from 'antd';
const { Search } = Input;
const { TabPane } = Tabs;


function ArticleList(){
  const navigate = useNavigate()
  const [data,setData] = useState([])
  const [total,setTotal] = useState(0)
  const [param,setParam] = useState({
    pageIndex:1,
    pageSize:10,
    type:null,  //文章类型
    status:null,
    keyword:null
  })

  const columns =[
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '创建时间',
      dataIndex: 'creationTime',
      render: (text) => {
        console.log(text);
        return <span>{dateFormat( new Date(text))}</span>
      },
    },
    {
      title: '更新时间',
      dataIndex: 'creationTime',
      render: (text) => <span>{dateFormat( new Date(text))}</span>,
    },
    {
      title:'操作',
      width:150,
      render: (_, record) => (
        <div className={style.tableBut}>
          <Tooltip placement="top" title="删除">
            <Popconfirm 
              title="是否删除?" 
              placement="bottom" 
              cancelText="否" 
              okText="是" 
              onConfirm={()=>onDelete(record)} 
              icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
              >
              <Button type="primary" danger ghost size="small" shape="circle" icon={<DeleteOutlined />} />
            </Popconfirm>
          </Tooltip>
          <Tooltip placement="top" title="编辑">
            <Button type="primary" onClick={()=>onEdit(record)} size="small" shape="circle" icon={<HighlightOutlined />} />
          </Tooltip>
          <Tooltip placement="top" title="详情">
            <Button type="primary" size="small" shape="circle" icon={<SnippetsOutlined />} />
          </Tooltip>
        </div>
      ),
    }
  ]
  
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
      pageIndex:1,
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
  //删除
  const onDelete =(record)=>{
    console.log(record);
    articleDeleteApi({articleId:record.articleId}).then(res=>{
      console.log(res);
      if(res.code == 0){
        message.success(res.msg)
        onLad()
      }
    })
  }
  //编辑
  const onEdit = (record) =>{
    navigate('/blog/articleEdit',{
      replace: false,
      state:{ 
        isFastTag:true,
        title:'文章编辑',
        articleId:record.articleId
      }
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
        rowKey={record=>record.articleId}
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