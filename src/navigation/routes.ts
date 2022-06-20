import {BottomTab} from '@screens';
import BottomTabNavigation from './BottomTab';

/**
 * Common screens
 */
export const commonScreens = {
  BottomTab: BottomTabNavigation,
};
export const userScreens = {
  Home: BottomTab.Home,
  Stats: BottomTab.Stats,
  Search: BottomTab.Search,
  Connect: BottomTab.Connect,
  More: BottomTab.More,
  UserProfile: BottomTab.Profile,
};

/**
 * Screens user when user not logged in
 */
export const notLoggedInScreens = {};
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
