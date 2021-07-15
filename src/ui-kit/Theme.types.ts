export interface Colors {
  primary: string;
  primaryHover: string;
  primaryActive: string;
  secondary: string;
  third: string;
  info: string;
  success: string;
  warning: string;
  error: string;
}

export interface Spacing {
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
}

export interface Font {
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
}

export interface Shadow {
  xxs: string;
}

export interface Theme {
  colors: Colors;
  spacing: Spacing;
  font: Font;
  shadow: Shadow;
}
