import React, { Component } from "react";
import OpeningPrayer from "./OpeningPrayer";
import EditScreenOne from "./EditScreenOne.js";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
  OpeningPrayer: { screen: OpeningPrayer },
  EditScreenOne: { screen: EditScreenOne }
}));
