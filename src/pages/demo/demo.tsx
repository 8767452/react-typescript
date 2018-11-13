import * as React from 'react'
import {inject, observer} from 'mobx-react'
import { Row, Col, Button, Badge, Icon, Form, Input, Select } from 'antd';

const FormItem = Form.Item
const TextArea = Input.TextArea
const Option = Select.Option

const styles = {
  block: {
    marginBottom: '20px',
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
    padding: '10px'
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  padding: {
    padding: '10px 0'
  }
}

// interface IProps{
//   demoStore?: any
// }

@inject('demoStore')
@observer
export class Demo extends React.Component<IProps> {

  componentDidMount() {
    // console.log($http)
    // console.log(this.props)
  }

  render(){
    const {demoStore: {
      count, add, desc,
      inputApi, methodChange, typeChange, inputParams, testApi,
      apiUrl, apiMethod, apiType, apiParams, apiResult
    }} = this.props
    
    return <div>
      <Row style={styles.padding}>
        <Col span={24}>
          hello, world! this is demo page.
        </Col>
      </Row>
      <section style={styles.block}>
        <h3>mini测试</h3>
        <Row style={styles.padding}>
          <Col span={24}>
            <Badge count={count} showZero={true}>
            </Badge>
            <Button onClick={desc}>
              <Icon type="minus" />
            </Button>
            <Button onClick={add}>
              <Icon type="plus" />
            </Button>
          </Col>
        </Row>
      </section>
      
      <section style={styles.block}>
        <h3>接口测试</h3>
        <Row style={styles.padding}>
          <Col span={24}>
            <Form>
              <FormItem label="api" labelCol={{span: 4}} wrapperCol={{span: 20}}>
                <Row gutter={8}>
                  <Col span={12}>
                    <Input placeholder="请输入url" onChange={e => inputApi(e.target.value)} value={apiUrl}/>
                  </Col>
                  {
                    apiType === '/api' ?
                    <Col span={3}>
                      <Select value={apiMethod}
                        onChange={methodChange}>
                        <Option value="GET">GET</Option>
                        <Option value="POST">POST</Option>
                        <Option value="PUT">PUT</Option>
                        <Option value="DELETE">DELETE</Option>
                      </Select>
                    </Col> : ''
                  }
                  <Col span={3}>
                    <Select value={apiType}
                      onChange={typeChange}>
                      <Option value="/api">RESTFul</Option>
                      <Option value="/graphql">GraphQL</Option>
                    </Select>
                  </Col>
                  <Col span={6}>
                    <Button type="primary" onClick={testApi}>发送</Button>
                  </Col>
                </Row>
              </FormItem>
              <FormItem label="参数(json格式)" labelCol={{span: 4}} wrapperCol={{span: 12}}>
                <TextArea rows={4} onChange={e => inputParams(e.target.value)}/>
              </FormItem>
              <FormItem label="结果" labelCol={{span: 4}} wrapperCol={{span: 18}}>
                <TextArea rows={20} value={apiResult}/>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </section>
      
    </div>
  }
}