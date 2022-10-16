import styles from './search-ui.shared.module.less';
import { Input } from 'antd';
export function SearchUi({ onSearch }) {
  const { Search } = Input;

  return (
    <div className={styles['container']}>
      <Search
        placeholder="Search Products"
        allowClear
        onSearch={onSearch}
        style={{ width: '100%' }}
      />
    </div>
  );
}
export default SearchUi;
