import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Card } from '../Models/card';
import e from 'express';



@Injectable({
  providedIn: 'root'
})
export class ClashService {
  private http = inject(HttpClient);
url = '/cards';
token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImFiMTRlOGNiLWIyYmUtNDhmNy1iNmFjLTJlZDUyODJhMjJlMyIsImlhdCI6MTc0MDg0ODEyMywic3ViIjoiZGV2ZWxvcGVyL2FkZTEwYTNmLTQ5MTQtNzQ3Ny0wNDU4LTg2OGM2NTMwYzEzZCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI5OS41Ni4xNC4yMDEiXSwidHlwZSI6ImNsaWVudCJ9XX0._et1Rww02sxEWcj4bHhRKf_XJACzWSkqkzj8YOrKy8dhAos3wLCjjJZi4Cs9wQVvEH9lL4wjqr22UuY9QGx76A';
  constructor() { }

  getCards(): Observable<Card[]> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.token}` });
    return this.http.get<Card[]>(this.url, { headers }).pipe(
      catchError((error) => {
        console.error('Error en la API:', error);
        throw error;
      })
    );
  }

  getCardsLocal(): Observable<Card[]>{
    return new Observable<Card[]>((observer) => {
      observer.next([
        {
          name: 'Golem',
          rarity: 'Epic',
          id: 1,
          maxLevel: 1,
          maxEvolutionLevel: 1,
          elixirCost: 1,
          img: 'golem.png'
        },
        {
          name: 'Giant',
          rarity: 'Rare',
          id: 2,
          maxLevel: 3,
          maxEvolutionLevel: 3,
          elixirCost: 3,
          img: 'giant.webp'
        },
        {
          name: 'Hog Rider',
          rarity: 'Rare',
          id: 6,
          maxLevel: 3,
          maxEvolutionLevel: 5,
          elixirCost: 9,
          img: 'hogRider.jpeg'
        },
        {
          name: 'Witch',
          rarity: 'Epic',
          id: 1,
          maxLevel: 1,
          maxEvolutionLevel: 1,
          elixirCost: 1,
          img: 'bruja.webp'

        },
        {
          name: 'Skeleton Army',
          rarity: 'Common',
          id: 1,
          maxLevel: 1,
          maxEvolutionLevel: 1,
          elixirCost: 1,
          img: 'skeletonArmy.webp'
        }
      ]);
    });
  
}

getStreetFighter(): Observable<string[]> {
  return new Observable<string[]>((observer) => {
    //setTimeout(() => {
      observer.next(['Ryu', 'Ken', 'Chun-Li', 'Guile']);
      //observer.complete();
   // }, 1000); // Simula una llamada asincrónica con un retraso de 1 segundo
  }).pipe(
    catchError(
      (varerror) => {
        console.error('Error en la API:', varerror);
        return throwError(varerror);
      }
    )
  );
}

getStreetFighter2(): Observable<string[]> {
  return of(['Ryu', 'Ken', 'Chun-Li', 'Guile']);
}

}
