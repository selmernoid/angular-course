import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  private characters: string = String.fromCharCode.apply(String, [
    ...[...Array('Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1).keys()].map(i => i + 'A'.charCodeAt(0)),
    ...[...Array('z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1).keys()].map(i => i + 'a'.charCodeAt(0)),
    ...[...Array('9'.charCodeAt(0) - '0'.charCodeAt(0) + 1).keys()].map(i => i + '0'.charCodeAt(0))
  ]);

  generate(n: number): string {
    return Array.from({ length: n }, (_, i) => this.characters[this.getRandomInt(0, this.characters.length - 1)]).join('');
  }

  private getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
