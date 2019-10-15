import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-model-window',
  templateUrl: './model-window.component.html',
  styleUrls: ['./model-window.component.css']
})
export class ModelWindowComponent implements OnInit {
  @Input() public isModalWindow: boolean;
  @Output() isModalClosed = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.isModalWindow = false;
    this.isModalClosed.emit(false);
  }
}
