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
  selector: 'app-about',
  standalone: true,
  imports: [MatCard, MatCardModule, MatGridListModule, MatToolbarModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class About {

}
