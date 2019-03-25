import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { FilterPipe } from './filter.pipe';
import { RecipeService } from '../services/recipe.service';

describe('FilterPipe', () => {
  let rs: RecipeService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ RecipeService ]
    });
    rs = TestBed.get(RecipeService);
  });

  it('should create an instance', () => {
    const pipe = new FilterPipe(rs);
    expect(pipe).toBeTruthy();
  });
});
