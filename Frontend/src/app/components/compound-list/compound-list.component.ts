import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compound-list',
  templateUrl: './compound-list.component.html',
  styleUrls: ['./compound-list.component.css']
})
export class CompoundListComponent implements OnInit {
  compounds = [
    { id: 1, name: 'Water', description: 'H2O - Essential for life', imageSource: 'path/to/image1.jpg' },
    { id: 2, name: 'Salt', description: 'NaCl - Common salt', imageSource: 'path/to/image2.jpg' },
    { id: 3, name: 'Sugar', description: 'C12H22O11 - Sweetener', imageSource: 'path/to/image3.jpg' },
    { id: 4, name: 'Baking Soda', description: 'NaHCO3 - Used in baking', imageSource: 'path/to/image4.jpg' },
    { id: 5, name: 'Vinegar', description: 'CH3COOH - Acetic acid', imageSource: 'path/to/image5.jpg' },
    { id: 6, name: 'Ammonia', description: 'NH3 - Used in cleaning', imageSource: 'path/to/image6.jpg' },
  ];
  itemsPerPage = 6;
  totalItems = this.compounds.length;
  currentPage = 1;

  ngOnInit(): void {}

  onPageChange(): void {
    // No actual pagination logic here since we’re displaying all demo data
  }
}
