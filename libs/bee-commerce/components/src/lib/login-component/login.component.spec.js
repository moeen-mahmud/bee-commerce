import { render } from '@testing-library/react';
import LoginComponent from './login.component';
describe('LoginComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoginComponent />);
    expect(baseElement).toBeTruthy();
  });
});
