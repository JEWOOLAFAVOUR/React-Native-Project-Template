// declarations.d.ts
declare module '*.png' {
  const content: number;
  export default content;
}

declare module '*.jpg' {
  const content: number;
  export default content;
}

declare module '*.jpeg' {
  const content: number;
  export default content;
}

declare module '*.svg' {
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

// If your constants file doesn't have TypeScript definitions
declare module './src/constants' {
  export const COLORS: {
    primary: string;
    white: string;
    [key: string]: string;
  };

  export const FONTS: {
    h1: object;
    h2: object;
    h3: object;
    h4: object;
    [key: string]: object;
  };

  export const SIZES: {
    base: number;
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    [key: string]: number;
  };
}
