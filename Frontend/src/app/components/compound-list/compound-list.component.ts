import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Compound {
  id: number;
  name: string;
  description: string;
  imageSource: string;
}


@Component({
  selector: 'app-compound-list',
  templateUrl: './compound-list.component.html',
  schemas: [NO_ERRORS_SCHEMA],
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./compound-list.component.css']
})
export class CompoundListComponent implements OnInit {
  compounds: Compound[] = [];
  itemsPerPage = 6;
  totalItems = 0;
  currentPage = 1;
  totalPages = 0;

  ngOnInit(): void {
    this.fetchCompounds(this.currentPage, this.itemsPerPage);
  }

  fetchCompounds(page: number, limit: number): void {
    axios.get(`http://localhost:3307/api/compounds?page=${page}&limit=${limit}`)
      .then(response => {
        this.compounds = response.data.data; // Adjust based on your API response structure
        this.totalItems = response.data.totalItems;
        this.totalPages = response.data.totalPages
      })
      .catch(error => {
        console.error('Error fetching compounds:', error);
      });
  }

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    this.fetchCompounds(this.currentPage, this.itemsPerPage);
  }
}
