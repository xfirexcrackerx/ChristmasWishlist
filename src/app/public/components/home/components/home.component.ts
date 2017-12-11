import { Component, OnInit } from '@angular/core';
import { CustomService } from '../../../../../services/custom-service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private customService: CustomService) {}

  ngOnInit() {
    this.customService.getData()
      .subscribe((result) => {
        console.log(result);
      });
  }

  submit() {
  }
}
