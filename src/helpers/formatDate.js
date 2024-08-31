import { formatDistanceToNow } from 'date-fns';

export function dateFormat(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}
