import { render } from '@testing-library/react';
import StoreComponent from './store.component';
describe('CategoryComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StoreComponent />);
    expect(baseElement).toBeTruthy();
  });
});
