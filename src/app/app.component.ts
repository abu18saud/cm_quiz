import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'اختبار إتقان مكعب';

  data: any = [];

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    this.appService.getData().subscribe(res => {
      this.data = res.data.sort((a:any, b:any)=> b.price - a.price);      
    });
  }


  change_image(image: any, i: number) {
    var image_container: any = document.getElementById("main-image_"+ i);
    image_container.src = image;

  }

}
