import { animals } from "./animals";
import { arrows } from "./arrows";
import { badges } from "./badges";
import { brand } from "./brand";
import { buildings } from "./buildings";
import { business } from "./business";
import { charts } from "./charts";
import { communication } from "./communication";
import { computers } from "./computers";
import { currencies } from "./currencies";
import { database } from "./database";
import { design } from "./design";
import { development } from "./development";
import { device } from "./device";
import { eCommerce } from "./e-commerce";
import { vehicles } from "./vehicles";
import { document } from "./document";
import { editor } from "./editor";
import { electrical } from "./electrical";
import { extensions } from "./extensions";
import { filled } from "./filled";
import { finance } from "./finance";
import { food } from "./food";
import { gender } from "./gender";
import { games } from "./games";
import { gestures } from "./gestures";
import { health } from "./health";
import { laundry } from "./laundry";
import { letters } from "./letters";
import { logic } from "./logic";
import { map } from "./map";
import { media } from "./media";
import { mood } from "./mood";
import { nature } from "./nature";
import { numbers } from "./numbers";
import { others } from "./others";
import { photography } from "./photography";
import { shapes } from "./shapes";
import { sport } from "./sport";
import { symbols } from "./symbols";
import { system } from "./system";
import { text } from "./text";
import { user } from "./user";
import { versionControl } from "./version-control";
import { weather } from "./weather";
import { zodiac } from "./zodiac";
import { logos } from "./logos";
import { math } from "./math";

export const Icons = {
  ...animals,
  ...arrows,
  ...badges,
  ...brand,
  ...buildings,
  ...business,
  ...charts,
  ...communication,
  ...computers,
  ...currencies,
  ...database,
  ...design,
  ...development,
  ...device,
  ...document,
  ...eCommerce,
  ...editor,
  ...electrical,
  ...extensions,
  ...filled,
  ...finance,
  ...food,
  ...games,
  ...gender,
  ...gestures,
  ...health,
  ...laundry,
  ...letters,
  ...logic,
  ...logos,
  ...map,
  ...math,
  ...media,
  ...mood,
  ...nature,
  ...numbers,
  ...others,
  ...photography,
  ...shapes,
  ...sport,
  ...symbols,
  ...system,
  ...text,
  ...user,
  ...vehicles,
  ...versionControl,
  ...weather,
  ...zodiac,
};

export type Ticons = keyof typeof Icons;
