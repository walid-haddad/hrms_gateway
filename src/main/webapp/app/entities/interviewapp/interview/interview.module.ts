import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HrmsGatewaySharedModule } from 'app/shared/shared.module';
import { InterviewComponent } from './interview.component';
import { InterviewDetailComponent } from './interview-detail.component';
import { InterviewUpdateComponent } from './interview-update.component';
import { InterviewDeleteDialogComponent } from './interview-delete-dialog.component';
import { interviewRoute } from './interview.route';

@NgModule({
  imports: [HrmsGatewaySharedModule, RouterModule.forChild(interviewRoute)],
  declarations: [InterviewComponent, InterviewDetailComponent, InterviewUpdateComponent, InterviewDeleteDialogComponent],
  entryComponents: [InterviewDeleteDialogComponent],
})
export class InterviewappInterviewModule {}
