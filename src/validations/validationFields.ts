import * as Yup from "yup";

const mealSchema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  description: Yup.string().required("Descrição é obrigatório"),
  date: Yup.string().required("Data é obrigatório"),
  hour: Yup.string().required("Hora é obrigatório"),
  status: Yup.string().oneOf(["SUCCESS", "FAIL"] as const, "Status deve ser marcado como Sim ou Não").required("Status é obrigatório")
});

interface mealSchemaProps {
  name: string;
  description: string;
  date: string;
  hour: string;
  status: string;
}

export { mealSchema }