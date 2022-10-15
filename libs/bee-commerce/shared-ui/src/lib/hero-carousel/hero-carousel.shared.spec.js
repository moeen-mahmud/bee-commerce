import { render } from '@testing-library/react';
import HeroCarousel from './hero-carousel.shared';
describe('HeroCarousel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroCarousel />);
    expect(baseElement).toBeTruthy();
  });
});
