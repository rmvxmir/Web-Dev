import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-album',
    imports: [CommonModule, RouterModule, HttpClientModule],
    templateUrl: './albums.component.html',
    styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
    albums : any[] = [];

    constructor(private http: HttpClient){}

    ngOnInit() {
        this.http.get<any[]>('/assets/albums.json')
        .subscribe({
            next: (data) => {
                this.albums = data;
            },
            error: (err) => console.error('Error fetching albums:', err),
        });
    }
}
