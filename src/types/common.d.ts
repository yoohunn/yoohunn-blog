type WithChildren<T = {}> = T & {
  children?: React.ReactNode;
};

type WithClassName<T = {}> = T & {
  className?: string;
};
