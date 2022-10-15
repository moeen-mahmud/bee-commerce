import { render } from '@testing-library/react';
import CategoryComponent from './category-component';
describe('CategoryComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CategoryComponent />);
    expect(baseElement).toBeTruthy();
  });
});
