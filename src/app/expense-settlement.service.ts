import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ExpenseSettlement } from './expense-settlement.model';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExpenseSettlementService {
  private baseUrl = 'http://localhost:8080/api/group';

  constructor(private http: HttpClient) {}

  getExpenseSettlement(groupName: string): Observable<ExpenseSettlement[]> {
    const url = `${this.baseUrl}/${groupName}/settlement`;
    return this.http.get<ExpenseSettlement[]>(url);
  }

  getAllGroups(): Observable<{ name: string }[]> {
    return this.http.get<{ name: string }[]>(`${this.baseUrl}`);
  }

  private handleError(error: any) {
    console.error('Error:', error);
    return throwError(error); // Rethrow the error
  }
}
