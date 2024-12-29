import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InviationService } from '../inviation.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  userId: string;

  constructor(private route: ActivatedRoute, private router: Router, private inviateService: InviationService) {
    this.userId = this.route.snapshot.paramMap.get('userId') || '';
  }

  async ngOnInit() {
    await this.inviationStatus();
  }
  async inviationStatus() {
    let res: any = await this.inviateService.getInviateStatus(this.userId);
    if (res.status == 200) {
      if (res.invitationStatus == "Pending") {

      }
      if (res.invitationStatus == "Rejected") {
        this.router.navigate(['/rejection',2]);
      }
      if (res.invitationStatus == "Accepted") {
        this.router.navigate(['/congratulation',1]);
      }
    }else{
      this.router.navigate(['/error',3]);
    }


  }
  async acceptInvitation() {
    var payload = {
      "userId": this.userId,
      "status": 1
    }
    let res: any = await this.inviateService.invitationAction(payload);
    if (res.status == 202) {

      this.router.navigate(['/congratulation',1]);
     }
  }

  async rejectInvitation() {
    var payload = {
      "userId": this.userId,
      "status": 2
    }
    let res: any = await this.inviateService.invitationAction(payload);
    if (res.status == 200) {
      this.router.navigate(['/rejection',2]);
     }
  }
}
