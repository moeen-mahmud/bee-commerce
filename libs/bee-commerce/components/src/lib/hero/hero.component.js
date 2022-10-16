import styles from './hero.component.module.less';
import { HeroCarousel } from '@bee-commerce/bee-commerce/shared-ui';
export function Hero(props) {
  return (
    <div className={styles['container']}>
      <HeroCarousel />
    </div>
  );
}
export default Hero;
