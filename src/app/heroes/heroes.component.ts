import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
    //cli generates 3 metadata as follows:
    selector: 'app-heroes', //  the components CSS element selector
    templateUrl: './heroes.component.html', //the location of the component's template file
    styleUrls: ['./heroes.component.css'] //the location of the component's private CSS styles
})
export class HeroesComponent implements OnInit {

    heroes : Hero[];

    constructor(private heroService: HeroService) { }
    
    ngOnInit() { //It is a lifecycle hook Angular - and It's a good place to put initialization logic
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }
}