import { RmwpPage } from './app.po';

describe('rmwp App', function() {
  let page: RmwpPage;

  beforeEach(() => {
    page = new RmwpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
