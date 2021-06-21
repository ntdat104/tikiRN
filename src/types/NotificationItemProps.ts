export interface Item {
  id: number;
  type: number;
  name: string;
  date: string;
  detail: string;
}

export interface NotificationItemProps {
  item: Item;
}
