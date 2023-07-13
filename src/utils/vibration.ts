const DEFAULT_VIBRATION_DURATION_MS = 1000;

const DEFAULT_VIBRATION_TIMES = 5;

export const getVibrationPattern = (
  secs = 1,
  length = DEFAULT_VIBRATION_TIMES
) => Array.from({ length }, (_, i) => secs * DEFAULT_VIBRATION_DURATION_MS);
