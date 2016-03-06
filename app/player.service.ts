import {Player} from './player';
import {Injectable} from 'angular2/core';

@Injectable()
export class PlayerService {

    getPlayer() {
        return Promise.resolve(player);
    }

}

var player: Player = { "gold": 0, "clicks": 0 }
