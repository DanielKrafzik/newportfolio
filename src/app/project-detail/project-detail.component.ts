import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  imports: [],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {
  constructor(private route: ActivatedRoute) {}

  projectId: string | null = null;

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('id');
  }
}
