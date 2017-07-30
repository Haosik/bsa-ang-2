import { SecondAppPage } from './app.po';

describe('second-app App', () => {
  let page: SecondAppPage;

  beforeEach(() => {
    page = new SecondAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
