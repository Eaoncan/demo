import { Component, useEffect } from "react";
import { View, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";

const Index = () => {
  useEffect(() => {
    console.log(11111);
    setTimeout(() => {
      Taro.navigateTo({ url: "/pages/about/index" });
    }, 10000);

    const timer = setInterval(() => {
      console.log("轮询");
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <View>123321</View>;
};

export default Index;
