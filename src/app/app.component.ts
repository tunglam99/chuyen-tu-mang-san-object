import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const lst = [
      '39f9eef6-fde6-ab8a-4162-aedc29decff',
      '39f9eefx6-fde6-ab8a-4162-aedc29desdcf',
      '39f9eefx6-fde6-ab8a-4162-aedc29desdds'
    ];
    const lst2 = lst.map(x => ({ x }));
    console.log(lst2);
  }
  name = 'Angular ' + VERSION.major;
}
