import {
  Component,
  EventEmitter,
  Input,
  Output,
  input,
  computed,
  output,
} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  // using input signals

  // avatar = input.required<string>();
  // name = input.required<string>();

  // using signals

  @Output() select = new EventEmitter();

  // using output

  // select = output<string>();

  // using output

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  // using input signals

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  // using signals

  onSelectUser() {
    this.select.emit(this.id);
  }
}
