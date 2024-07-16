import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  officers: any[] = [];
  selectedTab: number = 0; 
    text: string = '';
    chiefminister: File | null = null;
    departmentminister: File | null = null;
    data: any[] = [];
  constructor(private http: HttpClient,private configService: ConfigService) {}

  ngOnInit(): void {
    this.getOfficers();
    this.fetchData();
  }
  fetchData(): void {
    this.http.get<any[]>(this.configService.homepage1).subscribe(response => {
      this.data = response.map(item => ({
        id: item.id,
        text: item.text,
        chiefministerImageUrl: 'data:image/jpeg;base64,' + item.chiefminister,
        chiefministerName: item.chiefministerName,
        departmentministerImageUrl: 'data:image/jpeg;base64,' + item.departmentminister,
        departmentministerName: item.departmentministerName
      }));
    }, error => {
      console.error(error);
    });
  }

  getOfficers(): void {
    this.http.get<any[]>(this.configService.officerlist).subscribe(
      (response) => {
        this.officers = response.map(officer => ({
          ...officer,
          photoUrl: officer.photo ? `data:image/jpeg;base64,${officer.photo}` : null
        }));
      },
      (error) => {
        console.error('Error fetching officers:', error);
      }
    );
  }

  selectTab(index: number) {
    this.selectedTab = index;
    // Prevent default anchor click behavior which scrolls to top
    return false;
  }
}
