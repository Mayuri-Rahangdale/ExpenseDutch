import { Group } from './group.model';
export interface Participant {
  id?: number;
  name: string;
  group: Group;
}
