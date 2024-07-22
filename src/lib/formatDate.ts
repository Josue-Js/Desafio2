import { format } from 'date-fns';

export function formatDateTime(dateTime: string) {

  const result = format(new Date(dateTime), 'MMMM, dd yyyy')
  return result
}