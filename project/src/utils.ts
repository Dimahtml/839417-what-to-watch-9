import { AuthorizationStatus } from './const';

// Функция для перевода строкового значения даты в формат
export const getFormattedDate = (initialDate: string): string => {
  const currentDate = new Date(initialDate);
  const year : string = currentDate.getFullYear().toString();
  const month: string = currentDate.toLocaleString('en', { month: 'long' });
  const day: string = currentDate.getDate().toString();

  return `${month} ${day}, ${year}`;
};

// Функция для перевода строкового значения даты в формат
export const getFormattedDatetime = (initialDate: string): string => {
  const currentDate = new Date(initialDate);
  const year : string = currentDate.toLocaleString('en', {year: 'numeric'});
  const month: string = currentDate.toLocaleString('en', {month: '2-digit'});
  const day: string = currentDate.toLocaleString('en', {day: '2-digit'});

  return `${year}-${month}-${day}`;
};

// Функция для перевода минут в строку
export const getFormattedRuntime = (durationInMinutes: number): string => {
  const minutesInHour = 60;
  let result: string;
  const minutes: number = (durationInMinutes) % minutesInHour;

  if (durationInMinutes >= minutesInHour) {
    const hours: number = Math.floor(durationInMinutes / minutesInHour);
    result = `${hours}h ${minutes}m`;
    return result;
  }

  result = `${minutes}m`;
  return result;
};

export const getFilmRating = (mark: string | number): string => {
  mark = Number(mark);
  if (mark < 3) {
    return 'Bad';
  } else if (mark < 5) {
    return 'Normal';
  } else if (mark < 8) {
    return 'Good';
  } else if (mark < 10) {
    return 'Very Good';
  } else {
    return 'Awesome';
  }
};

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

// функция для получения оставшегося времени
export const getRemainingTime = (percents: number, durationInSec: number | string) => {
  let result = '';
  durationInSec = Math.floor(Number(durationInSec) * (100 - percents) / 100);
  if (durationInSec < 10) {
    durationInSec = `0${durationInSec}`;
  }
  let durationInMin: number | string = Math.floor(Number(durationInSec) / 60);
  if (durationInMin < 10) {
    durationInMin = `0${durationInMin}`;
  }
  result = `-${durationInMin}:${durationInSec}`;
  return result;
};

// функция для проверки пароля (должен содержать хотя бы 1 букву и 1 цифру)
export const isPasswordValid = (text: string) => {
  const reg1 = /[A-Za-zА-Яа-я]/;
  const reg2 = /[0-9]/;

  if (!text.match(reg1) || !text.match(reg2)) {
    return false;
  }

  return true;
};

// функция для проверки пароля (должен содержать хотя бы 1 букву и 1 цифру)
export const isLoginValid = (text: string) => {
  const reg1 = /[@]/;

  if (!text.match(reg1)) {
    return false;
  }

  return true;
};

