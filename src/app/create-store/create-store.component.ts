import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ProductService } from '../product.service';
import { Car } from '../car.model';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.css']
})
export class CreateStoreComponent implements OnInit {

  cities1: SelectItem[];
  selectedCity1: City;
  public cols: any[];
  public cars: Car[];
  public errorMessage: string = '';
  constructor(public productService: ProductService) {

    this.cities1 = [
      { label: 'New York', value: null },
      { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
      { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
      { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
      { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
      { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
    ];
  }

  ngOnInit() {

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: '', header: 'Year' },
      /*   { field: 'brand', header: 'Brand' },
        { field: 'color', header: 'Color' },
        { field: 'price', header: 'Price'} */
    ];

    this.productService.getCars().subscribe({
      next: cars => {
        this.cars = cars;
      },
      error: err => this.errorMessage = err
    });
  }
}
