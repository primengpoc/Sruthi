import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Car } from '../car.model';
import { ExportToCsv } from 'export-to-csv';
import { SelectItem } from 'primeng/api';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit {
  public cols: any[];
  public cars: Car[];
  public errorMessage: string = '';
  cities1: SelectItem[];
  selectedCity1: City;

  
  options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true, 
 //   showTitle: true,
   // title: 'My Awesome CSV',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
    // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
  };

  csvExporter = new ExportToCsv(this.options);

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
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' },
      { field: 'price', header: 'Price'} ,
    ];

    this.productService.getCars().subscribe({
      next: cars => {
        this.cars = cars;
      },
      error: err => this.errorMessage = err
    });
  }

   downloadCSV() {
    this.csvExporter.generateCsv(this.cars);
   }
}
