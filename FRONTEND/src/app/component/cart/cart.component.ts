import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Users } from "src/app/models/Users";
import { ServicesService } from "src/app/service/services.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  users!: Array<Users>;
  checkoutForm = this.formBuilder.group({
    name: "",
    address: "",
  });
  constructor(
    private formBuilder: FormBuilder,
    private service: ServicesService
  ) {}
  onSubmit(): void {
    // Process checkout data here
      // this.items = this.cartService.clearCart();
      // console.warn("Your order has been submitted", this.checkoutForm.value);
      // this.checkoutForm.reset();
  }
  ngOnInit(): void {
    // this.service.getContractors().subscribe((res) => {
    //   this.users = res;
    // });
    // console.log(this.users);
  }
}
