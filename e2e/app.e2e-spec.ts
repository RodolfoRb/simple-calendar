import { SimpleCalendarPage } from './app.po';

describe('simple-calendar App', function() {
  let page: SimpleCalendarPage;

  beforeEach(() => {
    page = new SimpleCalendarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
