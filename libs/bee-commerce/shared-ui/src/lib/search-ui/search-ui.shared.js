import styles from './search-ui.shared.module.less';
import { Input } from 'antd';
export function SearchUi({ onSearch }) {
  const { Search } = Input;

  return (
    <div className={styles['container']}>
      <Search
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
        style={{ width: '70%' }}
      />
    </div>
  );
}
export default SearchUi;
