import { TestBed } from '@angular/core/testing';
import { HttpProviderService } from './http-provider.service';
describe('HttpProviderService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(HttpProviderService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=http-provider.service.spec.js.map