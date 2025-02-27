import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NgChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  analyticsData: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchAnalyticsData();
  }

  fetchAnalyticsData(): void {
    this.apiService.getAnalyticsData().subscribe(data => {
      this.analyticsData = data;
    });
  }
}