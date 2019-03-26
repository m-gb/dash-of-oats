import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getHeadingText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  showCategories() {
    return element(by.className('category')).getAttribute('href') as Promise<any>;
  }

  showRecipes() {
    return element(by.className('recipe')).getAttribute('href') as Promise<any>;
  }

  searchBananaPancakes() {
    element(by.className('search-bar')).sendKeys('banana');
  }
  
  getSearchResults() {
    return element(by.linkText('Banana Pancakes')).isPresent() as Promise<boolean>;
  }

}
