import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-forms',
  inputs:['apps'],
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})

export class FoodComponent implements OnInit {
  public data: any[] = [];
  constructor(private http: HttpClient) {
  
    console.log('here you go');
  
   }
  calculate(query){
    const endpoint = 'https://trackapi.nutritionix.com/v2/natural/nutrients';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'x-app-id':'34f85adc',
        'x-app-key':'e71bade6c9517248145c2e082e5773be'
      })
    }
      this.http.post<any>(endpoint,{
        query:query,
    
      }, httpOptions)
      .subscribe( (res: any)=> {
        console.log(res);
        this.data = res;
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