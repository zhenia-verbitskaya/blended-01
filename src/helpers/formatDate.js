import { formatDistanceToNow, format } from 'date-fns';

export function dateFormat(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function dateFormating(date) {
  return format(new Date(date), 'Pp');
}
