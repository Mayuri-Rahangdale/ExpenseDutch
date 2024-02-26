import { Component, OnInit } from '@angular/core';
import { ExpenseSettlement } from '../expense-settlement.model';
import { ExpenseSettlementService } from '../expense-settlement.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-expense-settlement',
  templateUrl: './expense-settlement.component.html',
  styleUrls: ['./expense-settlement.component.css'],
})
export class ExpenseSettlementComponent implements OnInit {
  groups: { name: string }[] = [];
  groupName: string = ''; // Set the group name based on your application's logic
  expenseSettlement: ExpenseSettlement[] = [];

  constructor(
    private expenseSettlementService: ExpenseSettlementService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadGroups();
    this.route.paramMap.subscribe((param) => {
      const groupName = param.get('groupName');
      if (groupName) {
        this.groupName = groupName;
        this.loadExpenseSettlement();
      }
    });
  }

  loadGroups() {
    this.expenseSettlementService.getAllGroups().subscribe(
      (data) => {
        //console.log('Groups response:', data);
        this.groups = data;
      },
      (error) => {
        console.error('Error fetching groups:', error);
      }
    );
  }

  navigateToExpenseSettlement(groupName: string) {
    this.groupName = groupName;
    this.loadExpenseSettlement();
  }

  loadExpenseSettlement() {
    this.expenseSettlementService
      .getExpenseSettlement(this.groupName)
      .subscribe(
        (data: ExpenseSettlement[]) => {
          console.log(data);
          this.expenseSettlement = data;
        },
        (error) => {
          console.error('Error fetching expense settlement:', error);
        }
      );
  }
}
