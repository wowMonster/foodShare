import "./index.less";
import React from "react";
import { Button } from 'antd';
import { useState, useEffect } from 'react';

const BMap = window.BMap;
function Geolocation() {
  const showPosition = () => {
    let geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
          let mk = new BMap.Marker(r.point);
          let map = new BMap.Map("mapholder");
          let point = new BMap.Point(r.point.lng, r.point.lat);
          map.centerAndZoom(point, 16);
          map.enableScrollWheelZoom(true);
        }
        else {
          alert('failed'+this.getStatus());
        }        
      },{enableHighAccuracy: true});
  }
  return (
    <div className="Geolocation">
      <Button type="primary" onClick={showPosition}>获取位置</Button>
      <div id="mapholder" className="showgeolocation"></div>
    </div>
  );
}

export default Geolocation;