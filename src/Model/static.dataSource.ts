import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Product } from './product.model';
import { Order } from './order.model';

@Injectable()
export class StaticDataSource {
  private products: Product[] = [
    new Product(1, 'Flyroam Lace up shoe', 'Category 1', 'Sneaker Shoe (Category 1)', 100),
    new Product(2, 'T-Shirt', 'Category 1', 'Sports T-Shirt High Quality (Category 1)', 90),
    new Product(3, 'TR Trail Shoe', 'Category 1', 'Running Shoes (Category 1)', 99),
    new Product(4, 'Cooler', 'Category 1', 'High Quality Cooler (Category 1)', 50),
    new Product(5, 'Graphic T-Shirt Grey L', 'Category 1', 'Cotton T-Shirt (Category 1)', 60),
    new Product(6, 'Euphoria EDP 100 ml', 'Category 2', 'Liquid Amber, Black', 70),
    new Product(7, 'Eternity Moment EDP 100 ml', 'Category 2', 'Brazilian Rose', 80),
    new Product(8, 'In Red EDT 100 ml', 'Category 2', 'Lily, Jasmine, Violet', 90),
    new Product(9, 'Flower Pink EDT 100 ml', 'Category 2', 'Othmani Roses', 99),
    new Product(10, 'Musk EDC 59 ml', 'Category 2', 'Musk EDC 59 ml', 88),
    new Product(11, 'Shampoo', 'Category 3', 'This is High Quality Shampoo', 15)
  ];

  getProducts(): Observable<Product[]> {
    return from([this.products]);
  }

  saveOrder(order: Order): Observable<Order> {
    console.log(JSON.stringify(order));
    return from([order]);
  }
}
