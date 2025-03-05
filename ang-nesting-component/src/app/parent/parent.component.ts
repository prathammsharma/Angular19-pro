import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  imports: [ChildComponent]
})
export class ParentComponent {
  parentMessage = "Hello from Parent!";
  receivedMessage = '';

  receiveMessage(message: string) {
    this.receivedMessage = message;
  }
}