import { Component, OnInit } from '@angular/core';
import { Order } from './../../Model/order.model';
import { OrderRepository } from './../../Model/order.repository';
import { NgForm } from '@angular/forms';

@Component({
  // selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  orderSent = false;
  submitted = false;

  constructor(
    public order: Order,
    public repository: OrderRepository
  ) { }

  ngOnInit(): void {
  }

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.repository.saveOrder(this.order)
        .subscribe(orde => {
          this.order.clear();
          this.orderSent = true;
          this.submitted = false;
        });
    }
  }
}
