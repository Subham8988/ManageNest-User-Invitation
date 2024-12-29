import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InviationService } from '../inviation.service';

@Component({
  selector: 'app-action-page',
  standalone: true,
  imports: [],
  templateUrl: './action-page.component.html',
  styleUrl: './action-page.component.scss'
})
export class ActionPageComponent {
  id:any;
  constructor(private route: ActivatedRoute, private router: Router,private inviateService:InviationService) {
    this.id = this.route.snapshot.paramMap.get('id');   
  }

  ngOnInit(){

  }
}
