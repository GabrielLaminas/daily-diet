export default function formatPercentage(percentage: number){
  return new Intl.NumberFormat(
    "pt-BR", { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    }
  ).format(percentage);
}