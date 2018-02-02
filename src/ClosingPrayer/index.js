import React, { Component } from "react";
import ClosingPrayer from "./ClosingPrayer";
import { StackNavigator } from "react-navigation";

export default (DrawNav = StackNavigator({
  ClosingPrayer: { screen: ClosingPrayer }
}));
