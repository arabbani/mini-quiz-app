import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  readonly storageKeyName = 'apsstrQuizApp';

  constructor() { }

  get(key: string) {
    const value = localStorage.getItem(key) || '';
    return JSON.parse(value);
  }

  set(key: string, value: unknown) {
    return JSON.stringify(value);
  }
}
