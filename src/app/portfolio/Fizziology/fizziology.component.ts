import {Component, OnInit} from '@angular/core';
import 'bootstrap/dist/css/bootstrap.css';

@Component({
  selector: 'app-fizziology',
  templateUrl: './fizziology.component.html',
  styleUrls: ['./fizziology.component.css']
})

export class FizziologyComponent implements OnInit {

  ngOnInit() {
    window.scrollTo(0,0)
  }

}
