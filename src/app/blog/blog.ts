import { Component, OnInit, Inject, inject } from '@angular/core';
import { MatCard } from "@angular/material/card";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClient } from '@angular/common/http';
import { BlogDialog } from '../blog-dialog/blog-dialog';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [MatCard, MatCardModule, MatGridListModule, MatToolbarModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './blog.html',
  styleUrls: ['./blog.css'],
})
export class Blog {
  // initialize blog data (assign)
  blogs: any[] = [];
  selectedAuthor: string = 'all'; // Initialize to 'all'
  filteredAuthor: any[] = [];

  constructor(http: HttpClient) {
    const URL = 'blogs.json'; // Place blogs.json in src/assets

    http.get(URL).subscribe({
      next: (json: any) => {
        this.blogs = json.blogs; // lowercase
        this.filterAuthors();
        console.log(this.blogs);
      },
      complete: () => console.log("completed"),
      error: e => console.log(e.message)
    });
  }

  // filter for authors or so on (can modify to fit other types of filters)
  filterAuthors() {
    if (this.selectedAuthor === 'all') {
      this.filteredAuthor = this.blogs;
    } else {
      this.filteredAuthor = this.blogs.filter((blog: any) => blog.author === this.selectedAuthor);
    }
  }

  // 

  //get image function. Only uncomment if adding images to the json file and want to 
  //read from there.

  // getFlagImage(code: string): string {
  //   return `https://ejd.songho.ca/flags/${code.toLowerCase()}.jpg`;
  // }
  //

  readonly dialog = inject(MatDialog);
  openDialog(nation: any): void {
    let config = new MatDialogConfig();
    config.data = nation; // attach the nation object
    this.dialog.open(BlogDialog, config);
  }

}

export interface BlogInfo {
  title: String;
  author: String;
  date: String;
  summary: String;
}