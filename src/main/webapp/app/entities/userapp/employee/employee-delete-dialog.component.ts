import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IEmployee } from 'app/shared/model/userapp/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  templateUrl: './employee-delete-dialog.component.html',
})
export class EmployeeDeleteDialogComponent {
  employee?: IEmployee;

  constructor(protected employeeService: EmployeeService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: string): void {
    this.employeeService.delete(id).subscribe(() => {
      this.eventManager.broadcast('employeeListModification');
      this.activeModal.close();
    });
  }
}
