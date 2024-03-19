import moment from 'moment';

export const convertTime = (date: Date) => {
  const time = moment(date).format('yyyy-MM-DD');
  return time;
};
