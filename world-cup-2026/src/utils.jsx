import {
  Albania,
  Austria,
  Belgium,
  Croatia,
  Czechia,
  Denmark,
  England,
  France,
  Georgia,
  Germany,
  Hungary,
  Italy,
  Netherlands,
  Poland,
  Portugal,
  Romania,
  Scotland,
  Serbia,
  Slovakia,
  Slovenia,
  Spain,
  Switzerland,
  Türkiye,
  Ukraine,
} from "./components/icons/index.jsx";

export function getFlag(id) {
  const classIcon = "w-8 h-8 rounded-full";
  switch (id) {
    case "Albania":
      return <Albania className={classIcon} />;
    case "Austria":
      return <Austria className={classIcon} />;
    case "Belgium":
      return <Belgium className={classIcon} />;
    case "Croatia":
      return <Croatia className={classIcon} />;
    case "Czech Republic":
      return <Czechia className={classIcon} />;
    case "Denmark":
      return <Denmark className={classIcon} />;
    case "England":
      return <England className={classIcon} />;
    case "France":
      return <France className={classIcon} />;
    case "Georgia":
      return <Georgia className={classIcon} />;
    case "Germany":
      return <Germany className={classIcon} />;
    case "Hungary":
      return <Hungary className={classIcon} />;
    case "Italy":
      return <Italy className={classIcon} />;
    case "Netherlands":
      return <Netherlands className={classIcon} />;
    case "Poland":
      return <Poland className={classIcon} />;
    case "Portugal":
      return <Portugal className={classIcon} />;
    case "Romania":
      return <Romania className={classIcon} />;
    case "Scotland":
      return <Scotland className={classIcon} />;
    case "Serbia":
      return <Serbia className={classIcon} />;
    case "Slovakia":
      return <Slovakia className={classIcon} />;
    case "Slovenia":
      return <Slovenia className={classIcon} />;
    case "Spain":
      return <Spain className={classIcon} />;
    case "Switzerland":
      return <Switzerland className={classIcon} />;
    case "Türkiye":
      return <Türkiye className={classIcon} />;
    case "Ukraine":
      return <Ukraine className={classIcon} />;
    default:
      return null;
  }
}

