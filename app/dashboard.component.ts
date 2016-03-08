import { Component, OnInit } from 'angular2/core';
import { AppComponent } from './app.component';
import { Player } from './player';
import { PlayerService } from './player.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css'],
    inputs: []
})
export class DashboardComponent implements OnInit{
    player: Player;

    ngOnInit() {
        this.getPlayer();
    }

    constructor(
        private _playerService: PlayerService
    ) { }

    getPlayer() {
        this._playerService.getPlayer().then(player => this.player = player);
    }

    panGold() {
        this.player.gold += 1;
        this.player.clicks += 1;   
    }
}
