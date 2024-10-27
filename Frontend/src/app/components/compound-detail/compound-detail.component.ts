import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compound-detail',
  templateUrl: './compound-detail.component.html',
  schemas: [NO_ERRORS_SCHEMA],
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./compound-detail.component.css']
})
export class CompoundDetailComponent implements OnInit {
  compound: any = null;
  private apiUrl = 'http://localhost:3307/api/compounds';
  isEditing: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchCompound(id);
    }
  }

  async fetchCompound(id: string): Promise<void> {
    try {
      const response = await axios.get(`${this.apiUrl}/${id}`);
      this.compound = response.data;
    } catch (error) {
      console.error('Error fetching compound:', error);
    }
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  async saveChanges(): Promise<void> {
    try {
      await axios.put(`${this.apiUrl}/${this.compound.id}`, this.compound);
      this.isEditing = false;
      alert('Changes saved successfully');
    } catch (error) {
      console.error('Error saving compound:', error);
    }
  }
}
