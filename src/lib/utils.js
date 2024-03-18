import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

let colors = [
  "--sky-300",
  "--pink-300",
  "--green-300",
  "--yellow-300",
  "--red-300",
  "--purple-300",
  "--blue-300",
  "--indigo-300",
  "--violet-300",
];
export const getRandomColor = () => {
  return colors[random(0, colors.length)];
};

export const random = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;
