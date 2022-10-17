import { render } from '@testing-library/react';
import CartComponent from './cart.component';
describe('CartComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CartComponent />);
    expect(baseElement).toBeTruthy();
  });
});
