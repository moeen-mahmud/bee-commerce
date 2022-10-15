import styles from './hero.component.module.less';
import { SearchUi } from '@bee-commerce/bee-commerce/shared-ui';
export function Hero(props) {
  // handle on Search
  const onSearch = (value) => {
    console.log(value);
  };

  return (
    <div className={styles['container']}>
      <SearchUi onSearch={onSearch} />
    </div>
  );
}
export default Hero;
