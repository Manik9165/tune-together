export interface RouteObj {
  title?: string;
  nav?: boolean;
  children?: RouteObj[];
  path?: string;
  element?: JSX.Element;
  id?: string;
  index?: boolean;
  exact?: boolean;
  localize?: boolean;
}
