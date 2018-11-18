import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private auth : AuthentificationService) { }

  logout(){
    
    console.log("session clear"+sessionStorage.length+this.auth.getItem("nom_connecte"));
    this.auth.logoff();
  }

  ngOnInit() {
  }

}
