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

/* dado vindo do storage
[
  {
    "title":"04/04/2025",
    "data": [
      {
        "name":"Coxinha com Coca Cola",
        "description":"Coxinha de frango com requeijao turbinada de catupiri e uma coca bem gelada.",
        "hour":"19:47","status":"FAIL"
      },
      {
        "name":"Coca cola",
        "description":"coca bem gelada",
        "hour":"20:00",
        "status":"FAIL"
      },
      {
        "name":"Mingau de aveia",
        "description":"Mingau de Aveia com Whey protein","hour":"23:00",
        "status":"SUCCESS"
      }
    ]
  },
  {
    "title":"05/04/2025",
    "data": [
      {
        "name":"Café da Manha",
        "description":"Pao com cafe com leite",
        "hour":"09:40",
        "status":"SUCCESS"
      }
    ]
  }
]
*/