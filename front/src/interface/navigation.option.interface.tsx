import { ReactElement } from "react";

export interface IOption {
  id: number;
  icon: ReactElement;
  text: string;
  subtitle: string | null;
  isFocused: boolean;
  isClickable: boolean;
}
