import {BottomTab} from '@screens';
import BottomTabNavigation from './BottomTab';

/**
 * Common screens
 */
export const commonScreens = {
  BottomTab: BottomTabNavigation,
};

/**
 * Modal
 */
export const commonModalSlides = {};

/**
 * Bottom Tab
 */
export const bottomTabScreens = [
  {component: BottomTab.Home, name: 'Home'},
  {component: BottomTab.Stats, name: 'Stats'},
  {component: BottomTab.Search, name: 'Search'},
  {component: BottomTab.Connect, name: 'Profile'},
  {component: BottomTab.More, name: 'More'},
];
