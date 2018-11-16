import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Personne } from '../interfaces/Personne';

@Injectable({
    providedIn: 'root'
})
export class PersonneService {

    url: string = "http://localhost:8080/";

    constructor(private http: HttpClient) { }

    personnes: Personne[] = new Array;

    //headers: HttpHeaders = new HttpHeaders();

    //il faut passer les variables en sessions de locastorage ici
    username: string = "user";
    password: string = "";



    getAllPersonne() {
        // let user = this.username + ":" + this.password;
        // const headers = new HttpHeaders().set("Authorization", "Basic " + btoa(user));
        // headers.append('Access-Control-Allow-Origin', '*');
        // headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS');
        //return this.http.get<Array<Personne>>(this.url + "personnes/", { headers: headers });
        return this.http.get<Array<Personne>>(this.url + "personnes/");
    }

    findById(id: number) {
        return this.http.get<Personne>(this.url + "personnes/" + id);
    }

    addPersonne(p: Personne) {
        let user = this.username + ":" + this.password;
        const headers = new HttpHeaders().set("Authorization", "Basic " + btoa(user));
        // headers.append('Access-Control-Allow-Origin', '*');
        // headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS');
        return this.http.post(this.url + "personne/", p, { headers: headers });
    }

    supprPersonne(i: number) {
        let user = this.username + ":" + this.password;
        const headers = new HttpHeaders().set("Authorization", "Basic " + btoa(user));
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS');
        return this.http.delete(this.url + "personneDelete/" + i, { headers: headers });
    }

    updatePersonne(i: number, p: Personne) {
        let user = this.username + ":" + this.password;
        const headers = new HttpHeaders().set("Authorization", "Basic " + btoa(user));
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS');
        return this.http.put(this.url + "personneUpdate/" + i, p, { headers: headers });
    }

    login(mail: string, password: string) {
        let user = this.username + ":" + this.password;
        const headers = new HttpHeaders().set("Authorization", "Basic " + btoa(user));
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS');
        return this.http.get(this.url + "personneLogin?mail=" + mail + "&mdp=" + password, { headers: headers });
    }

}
