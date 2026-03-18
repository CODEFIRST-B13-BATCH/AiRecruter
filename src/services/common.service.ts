import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  additon(a: number, b: number): number {
    return a + b;
  }
}
