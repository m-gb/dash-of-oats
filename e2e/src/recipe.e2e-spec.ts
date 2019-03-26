import { RecipePage } from './recipe.po';
import { browser, logging } from 'protractor';

describe('Recipe page', () => {
  let page: RecipePage;

  beforeEach(() => {
    page = new RecipePage();
  });

  it('should display heading', () => {
    page.navigateToBananaPancakes();
    expect(page.getHeadingText()).toEqual('Banana Pancakes');
    page.navigateToEnergyBars();
    expect(page.getHeadingText()).toEqual('Energy Bars');
  });

  it('should display initial servings', () => {
    page.navigateToBananaPancakes();
    expect(page.getServings()).toEqual('12');
    page.navigateToEnergyBars();
    expect(page.getServings()).toEqual('8');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
