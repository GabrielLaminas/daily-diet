interface StatisticProps {
  percent: number;
  variant: "SUCCESS" | "FAIL" | "NEUTRAL";
  sequence: number;
  total_meal: number;
  in_meal: number;
  out_meal: number;
}

export default StatisticProps;
