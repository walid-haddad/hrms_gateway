import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { HrmsGatewayTestModule } from '../../../../test.module';
import { CandidateDetailComponent } from 'app/entities/userapp/candidate/candidate-detail.component';
import { Candidate } from 'app/shared/model/userapp/candidate.model';

describe('Component Tests', () => {
  describe('Candidate Management Detail Component', () => {
    let comp: CandidateDetailComponent;
    let fixture: ComponentFixture<CandidateDetailComponent>;
    const route = ({ data: of({ candidate: new Candidate('123') }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HrmsGatewayTestModule],
        declarations: [CandidateDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(CandidateDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(CandidateDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load candidate on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.candidate).toEqual(jasmine.objectContaining({ id: '123' }));
      });
    });
  });
});
