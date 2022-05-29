import { Tooltip } from 'antd';
import { ExpandOutlined,CompressOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from "react";
import screenfull from "screenfull";

const click = () => {
  if (!screenfull.isEnabled) {
    // message.warning("you browser can not work");
    return false;
  }
  screenfull.toggle();
};

function FullScreen(){
  const [isFullscreen, setIsFullscreen] = useState(false);

  const change = () => {
    setIsFullscreen(screenfull.isFullscreen);
  };

  useEffect(() => {
    screenfull.isEnabled && screenfull.on("change", change);
    return () => {
      screenfull.isEnabled && screenfull.off("change", change);
    };
  }, []);

  const title = isFullscreen ? "取消全屏" : "全屏";
  return (
    <>
      <Tooltip placement="bottom" title={title}>
        {
          isFullscreen&&
          (<CompressOutlined onClick={click}/>)||
          (<ExpandOutlined onClick={click}/>)
        }
        
      </Tooltip>
    </>
  );
}
export default FullScreen