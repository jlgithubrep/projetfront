import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Personne } from '../interfaces/Personne';

@Injectable({
    providedIn: 'root'
})
export class PersonneService {

    url: string = "http://localhost:8080/personnes/";

    constructor(private http: HttpClient) { }

    personnes: Personne[] = new Array;


    headers: HttpHeaders = new HttpHeaders();


    getAllPersonne() {
        return this.http.get<Array<Personne>>(this.url);
    }

    findById(id: number) {
        return this.http.get<Personne>(this.url + id);
    }

    addPersonne(p: Personne) {
        this.headers.append('Access-Control-Allow-Origin', '*');
        this.headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS');
        return this.http.post(this.url, p, { headers: this.headers });
    }

    supprPersonne(i: number) {
        this.headers.append('Access-Control-Allow-Origin', '*');
        this.headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS');
        return this.http.delete(this.url + i, { headers: this.headers });
    }

    updatePersonne(i: number, p: Personne) {
        return this.http.put(this.url + i, p);
    }

    login(mail:string, password : string){
        return this.http.get(this.url+ "search/findByMailAndMdp?mail="+mail+"&mdp="+password);
    }

}
