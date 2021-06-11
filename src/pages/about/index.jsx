import { Component, useEffect } from "react";
import { View, Text } from "@tarojs/components";

const Index = () => {
  useEffect(() => {
    console.log(3333);

    return () => {
      console.log(444);
    };
  }, []);
  return <View>about</View>;
};

export default Index;
