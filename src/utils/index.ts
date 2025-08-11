import { Timestamp } from "firebase/firestore";
import { HOME_PATH, LOGIN_PATH } from "../config/routes";
import dayjs from "dayjs";

export function getPageNameByPath(path: string) {

    switch(path){
        case LOGIN_PATH:
            return "Login";
        default:
            return "Página Inicial";
    }
}

export const formatDate = (date: Timestamp | null) => 
    date ? dayjs(date.toDate()).format("DD/MM/YYYY") : "";

export const valueToCurrency = (value: number | null) => {
    if(value == null) value = 0;
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(value)
}

export const getFormatedStrDateNow = (): string => {
    const today = new Date();

  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); 
  const year = today.getFullYear();

  const formattedDate = `${day}${month}${year}`;
  return formattedDate;
}

export const transformNumber = (numb: any): number => {

    var numbAux = numb;
    try {
        if (!numbAux) return 0;
        
        if (typeof numbAux === "number") return parseFloat(numbAux.toFixed(2));

        if (typeof numbAux === "string") {
            // Remove símbolo de moeda e espaços
            let cleaned = numbAux.replace("R$", "").trim();

            // Troca vírgula por ponto se for separador decimal
            cleaned = cleaned.replace(/\./g, "").replace(",", ".");

            const parsed = parseFloat(cleaned);
            return isNaN(parsed) ? 0 : parseFloat(parsed.toFixed(2));
        }

        return 0;
    } catch {
        return 0;
    }
};
