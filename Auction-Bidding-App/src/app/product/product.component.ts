import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  private productDes : object = {};

  constructor(private route : ActivatedRoute, private productService : ProductService, private location: Location) { }
  
  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    this.getProduct();
  }

  getProduct(){
    const productId = +this.route.snapshot.paramMap.get('id');
    console.log("Hamara product id is: ", productId);
    this.productService.getProduct(productId).subscribe(
      (res) => {
        this.productDes = res.json();
      },

      (err) => {
        console.log("Something went wrong", err);
      }
    );
  }

  goBack(){
    this.location.back();
  }

}
