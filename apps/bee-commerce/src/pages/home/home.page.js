import { Hero } from '@bee-commerce/bee-commerce/components';
import styles from './home.page.module.less';
export function Home(props) {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
}
export default Home;
