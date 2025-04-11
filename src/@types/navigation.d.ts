import { StatusProps } from "@components/Meal/styles";
import { DietDatailsVariant } from "@screens/DietDetails/styles";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      DietDetails: {
        percent: number;
        variant: DietDatailsVariant | "NEUTRAL";
        sequence: number;
        total_meal: number;
        in_meal: number;
        out_meal: number;
      }
      Registration: undefined;
      InfoMeal: {
        title: string;
        id: number;
        name: string;
        description: string;
        hour: string;
        status: StatusProps | "NEUTRAL";
      },
      Edition: {
        title: string;
        id: number;
        name: string;
        hour: string;
        description: string;
        status: StatusProps;
      },
      Feedback: {
        status: StatusProps;
      };
    }
  }
}