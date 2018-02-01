import React, { Component } from "react";
import OpeningPrayer from "./OpeningPrayer";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
  OpeningPrayer: { screen: OpeningPrayer }
}));
