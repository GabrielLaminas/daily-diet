interface DataInfoDTO {
  name: string;
  description: string;
  hour: string;
  status: "SUCCESS" | "FAIL" | "NEUTRAL";
}

interface DataMealDTO {
  title: string;
  data: DataInfoDTO[]
}

export { DataInfoDTO, DataMealDTO };