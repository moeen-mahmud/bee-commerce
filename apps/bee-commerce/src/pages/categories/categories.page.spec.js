import { render } from '@testing-library/react';
import Categories from './categories.pages';
describe('Categories', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Categories />);
    expect(baseElement).toBeTruthy();
  });
});
