import { Participant } from './participant.model';

export interface Expense {
  id?: number;
  description: string;
  amount: number;
  dateTime?: Date;
  participant: Participant;
}
