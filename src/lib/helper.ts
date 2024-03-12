import { TTime } from "./hooks/context";

export function convertTime(time: TTime) {
  const fullTime = `${time.minutes < 10 ? `0${time.minutes}` : time.minutes}:${
    time.seconds < 10 ? `0${time.seconds}` : time.seconds
  }`;

  const minutes = time.minutes;

  return {
    full: fullTime,
    minutes,
  };
}
