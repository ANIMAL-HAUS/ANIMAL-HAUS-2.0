import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { Users, UserRole } from 'src/app/models/Users';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: "app-grooming",
  templateUrl: "./grooming.component.html",
  styleUrls: ["./grooming.component.css"],
})
export class GroomingComponent implements OnInit {
  users!: Array<Users>;
  role!: Array<UserRole>;
  action!: string;

  product!: Array<Product>;
  selectedUser!: Users;
  createdProduct!: Product;

  constructor(
    private service: ServicesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  addContractorProduct() {
    this.createdProduct = new Product();
    this.router.navigate(["component", "grooming"], {
      queryParams: { action: "add" },
    });
  }
  ngOnInit(): void {}
}
