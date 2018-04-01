import {Component, OnInit} from '@angular/core';
import 'bootstrap/dist/css/bootstrap.css';

@Component({
  selector: 'app-farkle',
  templateUrl: './farkle.component.html',
  styleUrls: ['./farkle.component.css']
})

export class FarkleComponent implements OnInit {

  ngOnInit() {
    window.scrollTo(0,0)
  }

}
