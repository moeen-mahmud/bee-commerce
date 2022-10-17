import { render } from '@testing-library/react';
import RegisterComponent from './register.component';
describe('Register', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RegisterComponent />);
    expect(baseElement).toBeTruthy();
  });
});
