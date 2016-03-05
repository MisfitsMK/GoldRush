import {ShopItem} from './shop-item';
import {SHOPITEMS} from './mock-shop-items';
import {Injectable} from 'angular2/core';


@Injectable()
export class ShopItemService {
    getShopItems() {
        return Promise.resolve(SHOPITEMS);
    }
    getShopItemsSlowly() {
        return new Promise<ShopItem[]>(resolve => setTimeout(() => resolve(SHOPITEMS), 2000));
    }
}
