export const newColor = {
  rose: "after:bg-primary-rose before:border-primary-rose",
  orange: "after:bg-secondary-orange before:border-secondary-orange",
  yellow: "after:bg-tertiary-yellow before:border-tertiary-yellow",
} as const;

export const Color = {
  rose: "primary-rose",
  orange: "secondary-orange",
  yellow: "tertiary-yellow",
};

export type OnlyColors = {
  variant: keyof typeof Color;
};

export type Props = {
  variant: keyof typeof newColor; //newColorを型として扱いさらにこの中からkeyとしても使う（newColorの中身が増えた時に便利）
  // children: ReactNode;
  value: string;
};
