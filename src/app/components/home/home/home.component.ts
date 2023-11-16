import { AfterViewInit, Component } from '@angular/core';
import { myHttpService } from 'src/app/services/my-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  public categories: string[] = [];
  public categorySelect!: HTMLSelectElement;
  public products : any;
  private selectedCategory: string = '';
  

  constructor(private hService: myHttpService) {

  } 

  ngAfterViewInit(): void {
    this.hService.get("products/categories").subscribe((res: string[]) => {
      this.categories = res;
    })

  }

  public loadProductByCategory() {
    this.hService.get("products/category/" + this.selectedCategory).subscribe((res: any) => {
     this.products = res.products 
    })
  }

  public selectCategory(category: string) {
    this.selectedCategory = category;
  }


}
