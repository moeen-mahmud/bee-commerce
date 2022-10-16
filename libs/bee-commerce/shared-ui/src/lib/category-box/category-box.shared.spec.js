import { render } from '@testing-library/react';
import CategoryBox from './category-box.shared';
describe('CategoryBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CategoryBox />);
    expect(baseElement).toBeTruthy();
  });
});
