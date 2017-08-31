import { NrfPage } from './app.po';

describe('nrf App', () => {
  let page: NrfPage;

  beforeEach(() => {
    page = new NrfPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
