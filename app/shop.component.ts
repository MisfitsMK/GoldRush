import {Component, OnInit} from 'angular2/core';
import {ShopItem} from './shop-item';
import {ShopItemService} from './shop-item.service';


@Component({
    selector: 'my-shop',
    templateUrl: 'app/shop.component.html',
    styleUrls: ['app/shop.component.css']
})
export class ShopComponent implements OnInit {
    title = 'Supply Shop';
    shopItems: ShopItem[];
    selectedShopItem: ShopItem;

    ngOnInit() {
        this.getShopItems();
    }

    constructor(private _shopItemService: ShopItemService) { }
    getShopItems() {
        this._shopItemService.getShopItems().then(shopItems => this.shopItems = shopItems);
    }

    onSelect(shopItem: ShopItem) {
        this.selectedShopItem = shopItem;
    }
}

