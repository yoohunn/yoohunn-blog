export type ColorType =
  | 'gray'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'amber'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'pink';

export type ColorCode =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export type ColorPalette = Record<ColorType, Colors>;
export type Colors = Record<ColorCode, any>;
