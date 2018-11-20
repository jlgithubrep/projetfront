# Projetfront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## notes

let header = new Httpheader({
	"Autorization":"Basic"+btoa("wick":"passwick");
});

http.post(url, , header)




creation
spring boot starter
	jpa
	mysql
	web
	devtools

----
rajouter dependence
	web
	devtools

enlever les annotations @repositoryRestResource dans les reposirtory

creer les controller avec pathname
------

@Jsonignore dans le model

------------

rajouter test mail unique

afficher art par tag

tester la modif d'un article avec des comms et s'assurer que les comms sont toujours presents

crud personne
    create
	    faire inscription avec validators
    read
        liste des personnes pour l'admin
        page login pour user et journaliste en cours
    update
        page personne admin
	        pouvoir passer un utilisateur en journaliste
	        pas de modif de compte pour l'admin
        page usergestion
	        modif de compte
	        abonnement newsletter
        
    delete
        admin peut sur la liste

session
    component menu
    http://www.lsis.org/elmouelhia/courses/coursAngularPart11.pdf


crud article
    create
        seul admin/journaliste peut avoir le lien de creation
        rien
    read
        affichage general
        faire: un journaliste co ne peut afficher la liste des article qu'il a redigé lui meme, pas ceux des autres journalistes
    update
        rien
    delete
        rien


crud commentaire
    rien

sessions
    il faut renvoyer les infos de connexions vers le service pour l'acces au url, voir comm dans personneservice


securité

enlever la possibilite de suppression dans la liste des personne sur l'admin quand l'admin est co



test