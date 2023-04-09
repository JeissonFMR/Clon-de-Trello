import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


interface Products {
  id: string;
  title: string;
  price: number;
  images: string[];
}

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent {


  products: Products[] = []
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAll()
  }

  getAll() {
    this.http.get<Products[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.products = data
      })
  }
}
