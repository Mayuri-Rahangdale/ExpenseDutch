import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Participant } from './participant.model';
import { AddExpense } from './addExpense.model';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private baseUrl = 'http://localhost:8080/api/expenses';
  private participantURL = 'http://localhost:8080/api/participants';

  constructor(private http: HttpClient) {}

  getAllExpenses() {
    return this.http.get(this.baseUrl);
  }

  getAllParticipants() {
    return this.http.get(this.participantURL);
  }

  addExpense(expense: AddExpense) {
    return this.http.post(`${this.baseUrl}/add1`, expense);
  }
}
