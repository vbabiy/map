import { InjectionToken } from '@angular/core';

export const NG_MAP_CONFIG_TOKEN = new InjectionToken<string>('NG_MAP_CONFIG_TOKEN');

export interface ConfigOption {
    apiUrl?: string;
}
