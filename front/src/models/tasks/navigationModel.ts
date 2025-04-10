import { IOption } from "@/interface/navigation.option.interface";

export interface INavigationModel {
  options: IOption[];
  navigationClick: (id: number) => void;
}
