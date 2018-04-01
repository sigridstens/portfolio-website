import {Component, OnInit} from '@angular/core';
import 'bootstrap/dist/css/bootstrap.css';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  ngOnInit() {
    window.scrollTo(0,0)
  }

}
