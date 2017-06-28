import { TestFilterPage } from './app.po';

describe('test-filter App', () => {
  let page: TestFilterPage;

  beforeEach(() => {
    page = new TestFilterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
