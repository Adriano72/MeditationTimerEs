import React, { Component } from "react";
import ClosingPrayer from "./ClosingPrayer";
import EditScreenOne from "./EditScreenOne.js";
import EditScreenTwo from "./EditScreenTwo.js";
import { StackNavigator } from "react-navigation";

export default (DrawNav = StackNavigator({
  ClosingPrayer: { screen: ClosingPrayer },
  EditScreenOne: { screen: EditScreenOne }
}));
