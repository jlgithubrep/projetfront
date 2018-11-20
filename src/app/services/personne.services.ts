import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Personne } from '../interfaces/Personne';
import { AuthentificationService } from './authentification.service';

@Injectable({
    providedIn: 'root'
})
export class PersonneService {

    url: string = "http://localhost:8080/";
    mail: string ;
    password: string ;
    constructor(private http: HttpClient, private auth: AuthentificationService) { 
        // this.mail= this.auth.getItem("mail_connecte");
        // this.password = this.auth.getItem("mdp_connecte");
        // console.log(this.mail + ":" + this.password);

    }

    personnes: Personne[] = new Array();

    //headers: HttpHeaders = new HttpHeaders();

    //il faut passer les variables en sessions de locastorage ici
    // mail: string = "mail.test@gmail.com";
    // password: string = "admin";



    getAllPersonne() {
        this.mail= this.auth.getItem("mail_connecte");
        this.password = this.auth.getItem("mdp_connecte");
        let user = this.mail + ":" + this.password;
        console.log(this.mail + ":" + this.password);
        const headers = new HttpHeaders().set('Authorization', "Basic " + btoa(user));
        console.log(user);

        console.log("Basic " + btoa(user));


        // headers.append('Access-Control-Allow-Origin', '*');
        // headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS');

        return this.http.get<Array<Personne>>(this.url + "personnes/", { headers: headers });
        //return this.http.get<Array<Personne>>(this.url + "personnes/");
    }

    findById(id: number) {
        return this.http.get<Personne>(this.url + "personnes/" + id);
    }

    addPersonne(p: Personne) {
        return this.http.post(this.url + "personne/", p);
    }

    supprPersonne(i: number) {
        this.mail= this.auth.getItem("mail_connecte");
        this.password = this.auth.getItem("mdp_connecte");
        let user = this.mail + ":" + this.password;
        console.log(this.mail + ":" + this.password);
        const headers = new HttpHeaders().set('Authorization', "Basic " + btoa(user));

        return this.http.delete(this.url + "personneDelete/" + i, { headers: headers });
        //return this.http.delete(this.url + "personneDelete/" + i);
    }

    updatePersonne(i: number, p: Personne) {
        this.mail= this.auth.getItem("mail_connecte");
        this.password = this.auth.getItem("mdp_connecte");
        let user = this.mail + ":" + this.password;
        console.log(this.mail + ":" + this.password);
        const headers = new HttpHeaders().set('Authorization', "Basic " + btoa(user));

        return this.http.put(this.url + "personneUpdate/" + i, p, { headers: headers });
        //return this.http.put(this.url + "personneUpdate/" + i, p);
    }

    login(mail: string, password: string) {

        // let user = this.mail + ":" + this.password;
        // const headers = new HttpHeaders().append("Authorization", "Basic " + btoa(user));
        // headers.append('Access-Control-Allow-Origin', '*');
        // headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS');

        //return this.http.get(this.url + "personneLogin?mail=" + mail + "&mdp=" + password, { headers: headers });
        return this.http.get(this.url + "personneLogin?mail=" + mail + "&mdp=" + password);
    }

}
