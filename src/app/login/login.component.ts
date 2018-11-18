import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../services/personne.services';
import { Personne } from '../interfaces/Personne';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private personneService: PersonneService) {
    this.erreur = false;
  }

  mail: string;
  mdp: string;

  p: Personne;
  erreur: boolean;

  login() {
    this.personneService.login(this.mail, this.mdp).subscribe(res => {

      this.p = <Personne>res;
      console.log("log in reussi :"+this.p.nom);

    },
      err => {
        console.log(err.status);
        this.erreur=true;
      }
    );
  }

  ngOnInit() {
  }

}
