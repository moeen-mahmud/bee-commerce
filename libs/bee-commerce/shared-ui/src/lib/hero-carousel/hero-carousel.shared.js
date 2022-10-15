import styles from './hero-carousel.shared.module.less';
import { Carousel, Image, Space } from 'antd';

import person1Image from '../../../assets/hero-images/person_1.png';
import person2Image from '../../../assets/hero-images/person_2.png';

export function HeroCarousel(props) {
  return (
    <div className={styles['container']}>
      <Carousel autoplay effect="fade">
        <div>
          <div className={styles['carousel-container']}>
            <div>
              <div className={styles['carousel-content']}>
                <h3 className={styles['carousel-subheader']}>
                  Fall sell is on
                </h3>
                <h1 className={styles['carousel-header']}>
                  Discover Men's Collection
                </h1>
              </div>
            </div>
            <div style={{ marginRight: '4rem' }}>
              <Image preview={false} src={person1Image} />
            </div>
          </div>
        </div>
        <div>
          <div className={styles['carousel-container']}>
            <Space align="vertical">
              <div className={styles['carousel-content']}>
                <h3 className={styles['carousel-subheader']}>
                  Fall sell is on
                </h3>
                <h1 className={styles['carousel-header']}>
                  Discover Women's Collection
                </h1>
              </div>
            </Space>
            <div style={{ marginRight: '4rem' }}>
              <Image preview={false} src={person2Image} />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
export default HeroCarousel;
