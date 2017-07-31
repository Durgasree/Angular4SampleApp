import { EtekiPage } from './app.po';

describe('eteki App', () => {
  let page: EtekiPage;

  beforeEach(() => {
    page = new EtekiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
