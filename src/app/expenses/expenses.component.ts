import { Component, OnInit } from '@angular/core';
import { AddExpense } from '../addExpense.model';
import { ExpenseService } from '../expenses.service';
import { Expense } from '../expenses.model';
import { Participant } from '../participant.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface ExpenseAdd {
  description: string;
  amount: number;
  participantId: number;
}
@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent implements OnInit {
  expenseForm!: FormGroup; // Explicit type to address error
  expenses: Expense[] = [];
  participantsList: Participant[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private expenseService: ExpenseService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadExpenses();
    this.loadParticipants();
  }

  onSubmit() {
    if (this.expenseForm.invalid) {
      return; // Prevent submission if form is invalid
    }

    const expenseData = this.expenseForm.value as unknown as AddExpense; // Ensure correct type

    this.expenseService.addExpense(expenseData).subscribe(
      () => {
        this.expenseForm.reset(); // Reset form after successful submission
        // Handle success (e.g., display success message, update expense list)
      },
      (error) => {
        console.error('Error adding expense:', error);
        // Handle error (e.g., display error message to the user)
      }
    );
  }

  initializeForm() {
    this.expenseForm = this.formBuilder.group({
      description: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0)]], // Non-negative amounts
      participantId: ['', Validators.required],
    });
  }

  loadExpenses() {
    this.expenseService.getAllExpenses().subscribe((data: any) => {
      this.expenses = data as Expense[];
    });
  }

  loadParticipants() {
    this.expenseService.getAllParticipants().subscribe((data: any) => {
      this.participantsList = data as Participant[];
    });
  }
}
