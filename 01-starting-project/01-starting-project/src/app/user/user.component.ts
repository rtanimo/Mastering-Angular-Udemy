import {
  Component,
  EventEmitter,
  Input,
  Output,
  input,
  computed,
  output,
} from '@angular/core';

interface User {
  id: string;
  name: string;
  avatar: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  get userName() {
    return this.user.name;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
