import {Component, OnInit} from '@angular/core';
import 'bootstrap/dist/css/bootstrap.css';

@Component({
  selector: 'app-valentine',
  templateUrl: './valentine.component.html',
  styleUrls: ['./valentine.component.css']
})

export class ValentineComponent implements OnInit {

  ngOnInit() {
    window.scrollTo(0,0)
  }

}
