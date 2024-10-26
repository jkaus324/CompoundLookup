import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Compound {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-compound-list',
  standalone: true,
  imports: [],
  templateUrl: './compound-list.component.html',
  styleUrl: './compound-list.component.css'
})
export class CompoundListComponent implements OnInit {
  compounds: Compound[] = [
    { id: 1, name: 'Water (H₂O)', image: 'assets/images/water.jpg' },
    { id: 2, name: 'Carbon Dioxide (CO₂)', image: 'assets/images/carbon_dioxide.jpg' },
    { id: 3, name: 'Sodium Chloride (NaCl)', image: 'assets/images/sodium_chloride.jpg' },
    { id: 4, name: 'Methane (CH₄)', image: 'assets/images/methane.jpg' },
    { id: 5, name: 'Ammonia (NH₃)', image: 'assets/images/ammonia.jpg' },
    { id: 6, name: 'Glucose (C₆H₁₂O₆)', image: 'assets/images/glucose.jpg' },
    { id: 7, name: 'Sulfuric Acid (H₂SO₄)', image: 'assets/images/sulfuric_acid.jpg' },
    { id: 8, name: 'Ethanol (C₂H₅OH)', image: 'assets/images/ethanol.jpg' },
    { id: 9, name: 'Calcium Carbonate (CaCO₃)', image: 'assets/images/calcium_carbonate.jpg' },
    { id: 10, name: 'Hydrochloric Acid (HCl)', image: 'assets/images/hydrochloric_acid.jpg' },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
