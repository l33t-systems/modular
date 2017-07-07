import { ModularPage } from './app.po';

describe('modular App', () => {
  let page: ModularPage;

  beforeEach(() => {
    page = new ModularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
