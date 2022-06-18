import {
  ParamListBase,
  RouteConfig,
  NavigatorScreenParams,
} from '@react-navigation/native';

export type RootStackRoutes = {
  BottomTab: NavigatorScreenParams<BottomTabRoutes>;
};

export type BottomTabRoutes = {
  Home: undefined;
  Stats: undefined;
  Search: undefined;
  Profile: undefined;
  More: undefined;
};

export type RouteNames = keyof RootStackRoutes;

export type ScreenOptions<T extends ParamListBase, K extends {}> = {
  [screenName: string]: RouteConfig<T, keyof T, any, K, any>['options'];
};
