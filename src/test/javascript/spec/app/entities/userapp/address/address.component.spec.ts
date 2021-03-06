import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { HrmsGatewayTestModule } from '../../../../test.module';
import { AddressComponent } from 'app/entities/userapp/address/address.component';
import { AddressService } from 'app/entities/userapp/address/address.service';
import { Address } from 'app/shared/model/userapp/address.model';

describe('Component Tests', () => {
  describe('Address Management Component', () => {
    let comp: AddressComponent;
    let fixture: ComponentFixture<AddressComponent>;
    let service: AddressService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HrmsGatewayTestModule],
        declarations: [AddressComponent],
      })
        .overrideTemplate(AddressComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(AddressComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(AddressService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new Address(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.addresses && comp.addresses[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
