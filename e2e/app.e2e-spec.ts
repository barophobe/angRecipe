import { RecipePage } from './app.po';

describe('recipe App', () => {
  let page: RecipePage;

  beforeEach(() => {
    page = new RecipePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
