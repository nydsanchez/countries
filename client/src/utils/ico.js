import Verano from "../assets/summer.svg";
import Invierno from "../assets/invierno.svg";
import Otono from "../assets/spring.svg";
import Primavera from "../assets/fall.svg";

export default function ico(title) {
  switch (title) {
    case "Verano":
      return Verano;
    case "Invierno":
      return Invierno;
    case "Otono":
      return Otono;
    case "Primavera":
      return Primavera;
    default:
      return ""; // O una imagen por defecto
  }
}
