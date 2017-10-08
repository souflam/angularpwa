import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myData: Array<any>;

  constructor(private http: Http) {

    this.http.get('https://jsonplaceholder.typicode.com/photos?_start=1&_limit=10')
      .map(response => {
        return response.json()
      })
      .subscribe(res => {
        let newRes = res.map(res => {
          res.url = res.url.replace('http', 'https');
          return res;
        });
        console.log(newRes);
        this.myData = newRes;
      });


  }
}
