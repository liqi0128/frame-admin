import { memo } from'react'
import { Tooltip,Badge,Popover,Tabs } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { useState } from 'react';

const { TabPane } = Tabs

function Sound(){

  return (
    <>
      <Popover placement="bottom" content={
        <div className='message_frame'>
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="通知" key="1">
            </TabPane>
            <TabPane tab="消息" key="2">
            </TabPane>
            <TabPane tab="待办" key="3">
            </TabPane>
          </Tabs>
          <div className='message_frame_content'>
            {/* 内容 */}
          </div>
          <div className='message_frame_but'>
            <div>清空</div>
            <div>更多</div>
          </div>
        </div>
      } trigger="click">
        <Tooltip placement="bottom" title={'消息'}>
            <Badge size="small" count={5}>
              <BellOutlined />
            </Badge>
        </Tooltip>
      </Popover>
    </>
  );
}
export default memo(Sound)