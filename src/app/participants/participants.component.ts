import { Component, OnInit } from '@angular/core';
import { Participant } from '../participant.model';
import { ParticipantService } from '../participant.service';
import { Group } from '../group.model';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css'],
})
export class ParticipantsComponent implements OnInit {
  participant: Participant = { name: '', group: { name: '' } }; // Use the Participant interface
  participants: Participant[] = [];
  groups: Group[] = [];
  newGroupName: string = '';

  constructor(
    private participantService: ParticipantService,
    private groupService: GroupService
  ) {}

  ngOnInit(): void {
    this.loadParticipants();
    this.loadGroups();
  }

  onSubmit() {
    this.participantService.addParticipant(this.participant).subscribe(() => {
      this.loadParticipants();
      this.participant = { name: '', group: { name: '' } }; // Clear the form
    });
  }

  addGroup() {
    if (this.newGroupName) {
      this.groupService.addGroup(this.newGroupName).subscribe(() => {
        this.loadGroups();
        this.newGroupName = ''; // Clear the input after adding the group
      });
    }
  }

  loadParticipants() {
    this.participantService.getAllParticipants().subscribe((data: any) => {
      this.participants = data as Participant[];
    });
  }

  loadGroups() {
    this.groupService.getAllGroups().subscribe((data: any) => {
      this.groups = data as Group[];
    });
  }
}
