import { Injectable } from '@angular/core';
import { ensure } from 'src/app/utilities/ensure';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  constructor() {}

  setSavedState(state: any, localStorageKey: string) {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }

  getSavedState(localStorageKey: string): any {
    return JSON.parse(ensure(localStorage.getItem(localStorageKey)));
  }
}
