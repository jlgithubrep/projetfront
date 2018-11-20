import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../services/personne.services';
import { Personne } from '../interfaces/Personne';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private personneService: PersonneService, private router: Router, private auth : AuthentificationService) {
    this.erreur = false;
  }

  mail: string;
  mdp: string;

  p: Personne;
  erreur: boolean;

  login() {
    this.personneService.login(this.mail, this.mdp).subscribe(res => {
      console.log("why");
      this.p = <Personne>res;
      console.log("log in reussi :" + this.p.nom);

      //sessionStorage : stocke les donnees pour une connexion (les donnees sont perdues lorsque l’onglet du navigateur est fermé)
      // sessionStorage.setItem('nom_connete',this.p.nom);
      // sessionStorage.setItem('prenom_connecte',this.p.prenom);
      // sessionStorage.setItem('type_connecte',this.p.type);

      // if(window.sessionStorage){
      //   console.log("session ok");
      //   console.log("type: "+sessionStorage.getItem('type_connecte'));
      // }

      this.auth.setItem('id_connecte', this.p.id);
      this.auth.setItem('nom_connecte', this.p.nom);
      this.auth.setItem('prenom_connecte', this.p.prenom);
      this.auth.setItem('type_connecte', this.p.type);
      this.auth.setItem('mail_connecte', this.p.mail);
      this.auth.setItem("mdp_connecte",this.p.mdp);

      if (window.sessionStorage) {
        console.log("session ok");
        console.log("type: " + this.auth.getItem('type_connecte'));
      }



      //https://medium.com/@ozgurgul/angular-6-login-and-router-tutorial-ac5fc5d3027f
      this.router.navigateByUrl('/');

      //sessionStorage.clear();

    },
      err => {
        console.log("what");
        console.log(err.status);
        this.erreur = true;
      }
    );
  }

  ngOnInit() {
  }

}
