import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  movies:any

  columnDefs = [
    {key: 'id', text:'#', type: 'plain'},
    {key:'title', text:'title', type:'text'},
    {key:'director', text:'director', type:'text'},
    {key:'genre', text:'genre', type:'text'},
    {key:'release_year', text:'release year', type:'year'},
    {key:'poster', text:'poster', type:'image'},
  ]

  newMovie:any = []
  
  

}
