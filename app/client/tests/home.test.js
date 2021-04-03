const React = require('react');

const mockHydrate = jest.fn();
jest.mock('react-dom', () => ({
  hydrate: mockHydrate,
}));

// eslint-disable-next-line react/display-name
jest.mock('../../pages/home', () => () => <div />);

describe('Home client scripts', () => {
  beforeEach(() => {
    mockHydrate.mockClear();
  });

  it('should hydrate component for client script', () => {
    require('../../client/home');
    expect(mockHydrate).toHaveBeenCalledTimes(1);
  });
});
