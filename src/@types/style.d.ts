import 'styled-components';
import theme from 'src/theme/index';

declare module 'styled-components' {
    type ThemeType = typeof theme;
  
    export interface DefaultTheme extends ThemeType { }
  }