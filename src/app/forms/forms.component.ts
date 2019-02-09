import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-forms',
  inputs:['apps'],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit {
  public apps: any[] = [];
  constructor(private http: HttpClient) { }
  login(query, gender, weight_kg, height_cm, age){
    const endpoint = 'https://trackapi.nutritionix.com/v2/natural/exercise';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-app-id':'34f85adc',
        'x-app-key':'e71bade6c9517248145c2e082e5773be'
      })
    }
      this.http.post<any>(endpoint,{
        query:query,
        gender:gender,
        weight_kg:weight_kg,
        height_cm:height_cm,
        age:age
      }, httpOptions)
      .subscribe( (res: any)=> {
        console.log(res);
        this.apps = res.data;
      }, error => console.error(error));
  
    }
    ngOnInit(){
      
    }
  }

/*
interface Applications{
  duration_min:number,
  nf_calories:number
}*/