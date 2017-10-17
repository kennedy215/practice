import { browser, by, element } from 'protractor';

export class FrontendPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cppi-app h1')).getText();
  }
}
