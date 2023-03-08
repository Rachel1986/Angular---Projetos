import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

  @Output()
  uploadCompleto: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {}

  fazerUpload() {
    alert('Upload iniciado...')
    this.uploadCompleto.emit()
  }
}
