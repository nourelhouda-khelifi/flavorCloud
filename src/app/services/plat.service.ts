import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  private apiUrl = 'http://localhost:3000/plats'; 

  constructor(private http: HttpClient) {}

  
  getPlats(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

    
    addDish(platData: any): Observable<any> {
      return this.http.post(this.apiUrl, platData);
    }
    getPlatById(id: string): Observable<any> {
      return this.http.get(`${this.apiUrl}/${id}`);
    }
  
    updatePlat(id: string, platData: any): Observable<any> {
      return this.http.put(`${this.apiUrl}/${id}`, platData);
    }
    deletePlat(id: string): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    
}
