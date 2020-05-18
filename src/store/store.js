import { writable } from 'svelte/store';

export const storeList = writable({});
export const meta = writable({});
export const isCookieWallOpen = writable(false);
export const isAnalyticsAccepted = writable(false);
