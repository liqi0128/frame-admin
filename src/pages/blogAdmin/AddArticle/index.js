import { useEffect, useState } from "react";
import MDEditor from '@uiw/react-md-editor';
import style from'./index.module.less'
import { articleAddApi, getArticleApi, articleUpdateApi } from'@/api/article.js'
import { useLocation } from'react-router-dom'
import {
  Button,
  Form,
  Select,
  Input,
  Col, 
  Row,
  message
} from 'antd';
const { Option } = Select;
const formLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};

function AddArticle(){
  const location = useLocation()
  const [form] = Form.useForm();
  const [value, setValue] = useState("");
  const getArticle =()=>{
    let articleId = location.state.articleId;
    console.log( location );
    if (articleId) {
      getArticleApi({
        articleId:articleId
      }).then(res=>{
        console.log(res);
        if(res.code == 0){
          let data = res.data
          form.setFields([
            {name:'title',value:data.title},
            {name:'type',value:data.type.toString() || "1"},
          ])
          setValue(data.contents)
        }
      })
    }
  }
  useEffect(()=>{
    getArticle()
  },[])

  const onSave = (status) =>{
    form.validateFields().then(res=>{

      if(location.state && location.state.articleId){
        articleUpdateApi({
          ...res,
          articleId:location.state.articleId,
          status:status,
          contents:value
        }).then(res=>{
          if(res.code == 0){
            message.success('修改成功')
            console.log(res);
          }
        })
      }else{
        articleAddApi({
          ...res,
          status:status,
          contents:value
        }).then(res=>{
          if(res.code == 0){
            message.success('添加成功')
            console.log(res);
          }
          
        })
      }
    }).catch(err=>{
      console.log(err);
    })
  }

  return <div className={style.article}>
    <Form
      form={form}
      name="validate_other"
      {...formLayout}
      initialValues={{
        title:"",
        type:"1"
      }}
    >
      <Row>
        <Col span={12}>
          <Form.Item
            name="title"
            label="标题"
            rules={[
              {
                required: true,
                message: '请输入标题',
              },
            ]}
          >
            <Input placeholder="请输入标题" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="type"
            label="类型"
            rules={[
              {
                required: true,
                message: '请选择类型',
              },
            ]}
          >
            <Select placeholder="请选择类型">
              <Option value="1">vue</Option>
              <Option value="2">react</Option>
              <Option value="3">java</Option>
              <Option value="4">ts</Option>
              <Option value="5">js</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <div className={style.editor} data-color-mode="light">
        <MDEditor
            value={value}
            onChange={setValue}
            height={400}
          />
        {/* <MDEditor.Markdown source={value} /> */}
      </div>
      <div className={style.button}>
       <Button onClick={()=>onSave(0)} type="primary">
          保存
        </Button>
        <Button onClick={()=>onSave(1)} type="primary">
          保存发布
        </Button>
      </div>
      
    </Form>
  </div>
}

export default AddArticle