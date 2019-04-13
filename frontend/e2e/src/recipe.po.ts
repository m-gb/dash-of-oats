import { browser, by, element } from 'protractor';

export class RecipePage {
  navigateToBananaPancakes() {
    return browser.get("/recipes/banana_pancakes") as Promise<any>;
  }

  navigateToEnergyBars() {
    return browser.get("/recipes/energy_bars") as Promise<any>;
  }

  getHeadingText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getServings() {
    return element(by.className('servings-input')).getAttribute('value') as Promise<string>;
  }

}
