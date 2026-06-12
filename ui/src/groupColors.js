/** Group accent colors (shared with tailwind.config.js dec.group* tokens). */
export const GROUP_CORNER_CLASSES = [
  "bg-dec-groupA",
  "bg-dec-groupB",
  "bg-dec-groupC",
  "bg-dec-groupD",
  "bg-dec-groupE",
  "bg-dec-groupF",
  "bg-dec-groupG",
  "bg-dec-groupH",
  "bg-dec-groupI",
  "bg-dec-groupJ",
  "bg-dec-groupK",
  "bg-dec-groupL",
];

export const GROUP_COLOR_VALUES = [
  "#68c076",
  "#ee1c24",
  "#e8ea7c",
  "#1768b4",
  "#f58021",
  "#006958",
  "#b0a7d1",
  "#56bcb6",
  "#4d3b98",
  "#f8aa9b",
  "#ef3875",
  "#7f011d",
];

const SEGMENT_DEGREES = 360 / GROUP_COLOR_VALUES.length;

export const SEGMENTED_MODAL_BORDER_BACKGROUND = `conic-gradient(from -90deg, ${GROUP_COLOR_VALUES.map(
  (color, index) =>
    `${color} ${index * SEGMENT_DEGREES}deg ${(index + 1) * SEGMENT_DEGREES}deg`,
).join(", ")})`;

export function getGroupColorIndex(index) {
  return index % GROUP_CORNER_CLASSES.length;
}

export const GROUP_CORNER_COLORS = {
  "Group A": "#68c076",
  "Group B": "#ee1c24",
  "Group C": "#e8ea7c",
  "Group D": "#1768b4",
  "Group E": "#f58021",
  "Group F": "#006958",
  "Group G": "#b0a7d1",
  "Group H": "#56bcb6",
  "Group I": "#4d3b98",
  "Group J": "#f8aa9b",
  "Group K": "#ef3875",
  "Group L": "#7f011d",
};
