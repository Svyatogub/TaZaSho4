import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img:`https://estore.ua/media/catalog/product/cache/8/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-pro-pacific-blue_3_.jpeg`},
            {id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img:`https://estore.ua/media/catalog/product/cache/8/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-pro-pacific-blue_3_.jpeg`},
            {id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img:`https://estore.ua/media/catalog/product/cache/8/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-pro-pacific-blue_3_.jpeg`},
            {id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img:`https://estore.ua/media/catalog/product/cache/8/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-pro-pacific-blue_3_.jpeg`}
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}