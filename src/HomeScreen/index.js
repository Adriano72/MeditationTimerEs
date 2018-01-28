import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import OpeningPrayer from "../OpeningPrayer/index.js";
import ClosingPrayer from "../ClosingPrayer/index.js";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";
import { StackNavigator } from "react-navigation";


const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    OpeningPrayer: { screen: OpeningPrayer },
    ClosingPrayer: { screen: ClosingPrayer }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;

export const DrawNav = StackNavigator({
    OpeningPrayer: { screen: OpeningPrayer }
});
