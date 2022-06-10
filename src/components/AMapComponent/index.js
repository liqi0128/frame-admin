//地图组件
import { useEffect } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';

function AMapComponent(){
    let map = null
    useEffect(()=> {
        AMapLoader.load({
            key:"ce5f41918dd37f3c6e274d6004206d30",// 申请好的Web端开发者Key，首次调用 load 时必填
            version:"2.0",              // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            plugins:['AMap.Geolocation','AMap.CitySearch'],// 需要使用的的插件列表，如比例尺'AMap.Scale'等
        }).then((AMap)=>{
            map = new AMap.Map("container",{ //设置地图容器id
                viewMode:"3D",         //是否为3D地图模式
                zoom:5,                //初始化地图级别
                center:[105.602725,37.076636], //初始化地图中心点位置
            });
            var geolocation = new AMap.Geolocation({
                enableHighAccuracy: true,//是否使用高精度定位，默认:true
                timeout: 10000,          //超过10秒后停止定位，默认：5s
                position:'RB',    //定位按钮的停靠位置
                offset: [10, 20], //定位按钮与设置的停靠位置的偏移量，默认：[10, 20]
                zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
    
            });
            map.addControl(geolocation);
            geolocation.getCurrentPosition(function(status,result){
                console.log(status);
                console.log(result);
            });

            var citysearch = new AMap.CitySearch();
            //自动获取用户IP，返回当前城市
            citysearch.getLocalCity(function(status, result) {
                console.log(status);
                console.log(result);
                // if (status === 'complete' && result.info === 'OK') {
                //     if (result && result.city && result.bounds) {
                //         var cityinfo = result.city;
                //         var citybounds = result.bounds;
                //         document.getElementById('info').innerHTML = '您当前所在城市：'+cityinfo;
                //         //地图显示当前城市
                //         map.setBounds(citybounds);
                //     }
                // } else {
                //     document.getElementById('info').innerHTML = result.info;
                // }
            });

        }).catch(e=>{
            console.log(e);
        })
    },[])

    return (
        <div>
            <div id="container" className="map" style={{ height: '800px' }} > 

            </div>
        </div>
    )
}

export default AMapComponent