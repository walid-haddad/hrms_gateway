import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { HrmsGatewayTestModule } from '../../../../test.module';
import { MockEventManager } from '../../../../helpers/mock-event-manager.service';
import { MockActiveModal } from '../../../../helpers/mock-active-modal.service';
import { DegreeLevelDeleteDialogComponent } from 'app/entities/jobposting/degree-level/degree-level-delete-dialog.component';
import { DegreeLevelService } from 'app/entities/jobposting/degree-level/degree-level.service';

describe('Component Tests', () => {
  describe('DegreeLevel Management Delete Component', () => {
    let comp: DegreeLevelDeleteDialogComponent;
    let fixture: ComponentFixture<DegreeLevelDeleteDialogComponent>;
    let service: DegreeLevelService;
    let mockEventManager: MockEventManager;
    let mockActiveModal: MockActiveModal;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HrmsGatewayTestModule],
        declarations: [DegreeLevelDeleteDialogComponent],
      })
        .overrideTemplate(DegreeLevelDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(DegreeLevelDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DegreeLevelService);
      mockEventManager = TestBed.get(JhiEventManager);
      mockActiveModal = TestBed.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.closeSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));

      it('Should not call delete service on clear', () => {
        // GIVEN
        spyOn(service, 'delete');

        // WHEN
        comp.cancel();

        // THEN
        expect(service.delete).not.toHaveBeenCalled();
        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
      });
    });
  });
});
