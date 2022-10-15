import styles from './hero.component.module.less';
import { HeroCarousel, SearchUi } from '@bee-commerce/bee-commerce/shared-ui';
export function Hero(props) {
  // handle on Search
  const onSearch = (value) => {
    console.log(value);
  };

  return (
    <div className={styles['container']}>
      <SearchUi onSearch={onSearch} />
      <HeroCarousel />
    </div>
  );
}
export default Hero;
