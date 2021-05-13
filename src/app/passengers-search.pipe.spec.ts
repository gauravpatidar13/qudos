import { PassengersSearchPipe } from './passengers-search.pipe';

describe('PassengersSearchPipe', () => {
  it('create an instance', () => {
    const pipe = new PassengersSearchPipe();
    expect(pipe).toBeTruthy();
  });
});
