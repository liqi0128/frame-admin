import { useEffect, useState } from "react";
import MDEditor from '@uiw/react-md-editor';
import style from'./index.module.less'
import { articleAddApi } from'@/api/article.js'
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
  const [form] = Form.useForm();
  const [value, setValue] = useState("**Hello world!!!**");
  const [fields,setFields] =useState({
    title:"123",
    type:"1"
  })
  useEffect(()=>{

  },[])
  const onChange = (text)=>{
    console.log(text);
    setValue(text)
  }

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const onSave = (status) =>{
    form.validateFields().then(res=>{
      console.log(res);
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
    }).catch(err=>{
      console.log(err);
    })
  }

  return <div className={style.article}>
    <Form
      form={form}
      name="validate_other"
      {...formLayout}
      initialValues={fields}
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
            onChange={onChange}
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