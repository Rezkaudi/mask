import { TItem } from "./item.type";
import { TMaker } from "./maker.type";
import { TPurchaseItem } from "./purchase-item.types";

export type TCategory = {
  id: string;
  title: string;
  items: TItem[];
  makers: TMaker[];
  purchaseItems: TPurchaseItem[];
};
