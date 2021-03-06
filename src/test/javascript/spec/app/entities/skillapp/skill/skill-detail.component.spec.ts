import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { HrmsGatewayTestModule } from '../../../../test.module';
import { SkillDetailComponent } from 'app/entities/skillapp/skill/skill-detail.component';
import { Skill } from 'app/shared/model/skillapp/skill.model';

describe('Component Tests', () => {
  describe('Skill Management Detail Component', () => {
    let comp: SkillDetailComponent;
    let fixture: ComponentFixture<SkillDetailComponent>;
    const route = ({ data: of({ skill: new Skill(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HrmsGatewayTestModule],
        declarations: [SkillDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(SkillDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(SkillDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load skill on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.skill).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
