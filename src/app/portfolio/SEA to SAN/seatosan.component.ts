import {Component, OnInit} from '@angular/core';
import 'bootstrap/dist/css/bootstrap.css';

@Component({
  selector: 'app-seatosan',
  templateUrl: './seatosan.component.html',
  styleUrls: ['./seatosan.component.css']
})

export class SeatoSanComponent implements OnInit {

  ngOnInit() {
    window.scrollTo(0,0)
  }

}
