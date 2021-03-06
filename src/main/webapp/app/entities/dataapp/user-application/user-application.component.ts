import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IUserApplication } from 'app/shared/model/dataapp/user-application.model';
import { UserApplicationService } from './user-application.service';
import { UserApplicationDeleteDialogComponent } from './user-application-delete-dialog.component';

@Component({
  selector: 'jhi-user-application',
  templateUrl: './user-application.component.html',
})
export class UserApplicationComponent implements OnInit, OnDestroy {
  userApplications?: IUserApplication[];
  eventSubscriber?: Subscription;

  constructor(
    protected userApplicationService: UserApplicationService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll(): void {
    this.userApplicationService.query().subscribe((res: HttpResponse<IUserApplication[]>) => (this.userApplications = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInUserApplications();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IUserApplication): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInUserApplications(): void {
    this.eventSubscriber = this.eventManager.subscribe('userApplicationListModification', () => this.loadAll());
  }

  delete(userApplication: IUserApplication): void {
    const modalRef = this.modalService.open(UserApplicationDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.userApplication = userApplication;
  }
}
