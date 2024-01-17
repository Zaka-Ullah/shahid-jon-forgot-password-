export type SelectionType = {
  id: number;
  code: string;
  name: string;
  options: SelectOptionType[];
};

export type SelectOptionType = {
  id: number;
  code: string;
  label: { [key: string]: string };
};
