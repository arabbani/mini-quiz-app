import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  readonly storageKeyName = 'apsstrQuizApp-';

  constructor() { }

  get(key: string) {
    const value = localStorage.getItem(this.storageKeyName + key);
    return value ? JSON.parse(value) : null;
  }

  set(key: string, value: any) {
    localStorage.setItem(this.storageKeyName + key, JSON.stringify(value));
    ;
  }
}
