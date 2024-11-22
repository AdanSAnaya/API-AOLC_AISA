import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=1302'; // Obtenemos los primeros 50 Pokémon.

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getPokemonDetails(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}
