import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	private productsList : object[] = [];

	constructor(private productService: ProductService, private router : Router) { }

	ngOnInit() {
		this.productService.fetchProductList().subscribe(
			(res) => {
				this.productsList = res.json();
			},

			(err) => {
				console.log("Error message is : ", err);
			}
		)
	}

	deleteProduct(id){
		console.log("Product needs to be deleted is: " ,id);
		this.productService.delProduct(id).subscribe(
			(res) => {
				console.log("Delete result is : ", res.json());
				this.router.navigateByUrl("/reload");
			},

			(err) => {
				console.log("Something went wrong while deleting the product: ", err);
			}
		)
	}

}
