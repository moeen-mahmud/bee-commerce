import { render } from '@testing-library/react';
import ProductBox from './product-box.shared';
describe('ProductBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductBox />);
    expect(baseElement).toBeTruthy();
  });
});
