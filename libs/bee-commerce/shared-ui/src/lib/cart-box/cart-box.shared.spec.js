import { render } from '@testing-library/react';
import CartBox from './cart-box.shared';
describe('CartBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CartBox />);
    expect(baseElement).toBeTruthy();
  });
});
