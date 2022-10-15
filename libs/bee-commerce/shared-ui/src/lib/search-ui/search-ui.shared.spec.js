import { render } from '@testing-library/react';
import SearchUi from './search-ui.shared';
describe('SearchUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchUi />);
    expect(baseElement).toBeTruthy();
  });
});
