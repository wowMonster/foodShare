import "./index.less";
import React from "react";
import { Button } from 'antd';
import { useState } from 'react';

const BMap = window.BMap;
function Geolocation() {
  const [buttonText, setButtonText] = useState("11");
  
  const geolocationGet = () => {
    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(showPosition, onerror);
    }
    else { setButtonText("Geolocation is not supported by this browser.") }
  }
  const showPosition = () => {
    var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
          var mk = new BMap.Marker(r.point);
          var map = new BMap.Map("mapholder");
          var point = new BMap.Point(r.point.lng, r.point.lat);
          map.centerAndZoom(point, 16);
          map.enableScrollWheelZoom(true);
        }
        else {
          alert('failed'+this.getStatus());
        }        
      },{enableHighAccuracy: true});
  }
  const onerror = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setButtonText("User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
        setButtonText("Location information is unavailable.")
        break;
      case error.TIMEOUT:
        setButtonText("The request to get user location timed out.")
        break;
      case error.UNKNOWN_ERROR:
        setButtonText("An unknown error occurred.")
        break;
    }
  }
  return (
    <div className="Geolocation">
      <Button type="primary" onClick={showPosition}>获取位置</Button>
      <div id="mapholder" className="showgeolocation"></div>
    </div>
  );
}

export default Geolocation;