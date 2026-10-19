import { formatDisplayName as formatName } from './utils/format-name.js';

export function buildGreeting(name) {
  return formatName(name);
}
