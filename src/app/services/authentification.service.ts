import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }

  getItem(key: string) {
    return sessionStorage.getItem(key);
  }

  setItem(key: string, value: string){
    sessionStorage.setItem(key, value);
  }

  isLogged(){
    if(sessionStorage.length > 0){
      return true;
    }

    return false;
  }

  logoff(){
    sessionStorage.clear();
  }


}

//https://stackoverflow.com/questions/47457288/accessing-session-storage-across-application-in-angular-2