import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { MatHeaderCell, MatHeaderRow, MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-blog-dialog',
  standalone: true,
  imports: [MatDialogActions, MatDialogClose, MatDialogContent, MatTableModule, FormsModule, MatButtonModule],
  templateUrl: './blog-dialog.html',
  styleUrl: './blog-dialog.css',
})
export class BlogDialog {
  info: any;
  content: any[] = [];
  displayedColumns: string[] = ['name', 'population', 'district'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.info = data;
    this.content = data.content || [];
  }
}
