import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ParticipantService {
  private baseUrl = 'http://localhost:8080/api/participants';

  constructor(private http: HttpClient) {}

  getAllParticipants() {
    return this.http.get(this.baseUrl);
  }

  addParticipant(participant: any) {
    return this.http.post(`${this.baseUrl}/add`, participant);
  }
}
