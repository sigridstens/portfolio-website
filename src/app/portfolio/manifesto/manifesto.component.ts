import {Component, OnInit} from '@angular/core';
import 'bootstrap/dist/css/bootstrap.css';

@Component({
  selector: 'app-manifesto',
  templateUrl: './manifesto.component.html',
  styleUrls: ['./manifesto.component.css']
})

export class ManifestoComponent implements OnInit {

  ngOnInit() {
    window.scrollTo(0,0)
  }

}
