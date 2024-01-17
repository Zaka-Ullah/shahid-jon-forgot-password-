export const formatMoney = (text = "") => {
  return text?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export const formatNullString = (
  value: string | undefined | null,
  internalText = "-"
) => {
  return value || internalText;
};

export const formatWrapString = (value: string | undefined | null) => {
  return value && value.replace(/(?:\r\n|\r|\n)/g, "<br>");
};