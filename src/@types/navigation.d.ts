import { StatusProps } from "@components/Meal/styles";
import { DietDatailsVariant } from "@screens/DietDetails/styles";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      DietDetails: {
        percent: string;
        variant: DietDatailsVariant;
        sequence: number;
        total_meal: number;
        in_meal: number;
        out_meal: number;
      }
      Registration: undefined;
      InfoMeal: {
        title: string;
        name: string;
        hour: string;
        meal: string;
        status: StatusProps;
      },
      Edition: {
        title: string;
        name: string;
        hour: string;
        meal: string;
        status: StatusProps;
      },
      Feedback: {
        status: StatusProps;
      };
    }
  }
}