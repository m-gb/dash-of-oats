import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('App page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display heading', () => {
    page.navigateTo();
    expect(page.getHeadingText()).toEqual('Recipes');
  });

  it('should display categories', () => {
    page.navigateTo();
    expect(page.showCategories()).not.toBeNull();
  });

  it('should display recipes', () => {
    page.navigateTo();
    expect(page.showRecipes()).not.toBeNull();
  });

  it('should filter recipes', () => {
    page.navigateTo();
    page.searchBananaPancakes();
    expect(page.getSearchResults()).toBeTruthy();
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
