import { TestBed } from '@angular/core/testing';
import { DataProviderOMDbService } from './data-provider-omdb.service';
describe('DataProviderOMDbService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(DataProviderOMDbService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=data-provider-omdb.service.spec.js.map