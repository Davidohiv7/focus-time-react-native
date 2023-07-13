export const minutesToMils = (min: number) => min * 1000 * 60;
export const formatTime = (time: number) => (time < 10 ? `0${time}` : time);
