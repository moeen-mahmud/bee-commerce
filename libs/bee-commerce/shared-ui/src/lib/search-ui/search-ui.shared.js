import styles from './search-ui.shared.module.less';
import { Input, Space, Switch } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
export function SearchUi({ onSearch, isCategory, toggleCategory }) {
  const { Search } = Input;

  return (
    <div className={styles['container']}>
      <Search
        placeholder="Search Products"
        style={{ width: '70%' }}
        allowClear
        onChange={(e) => {
          onSearch(e.target.value);
        }}
      />
      <Space>
        <div>Categories</div>
        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          defaultChecked={isCategory}
          onChange={toggleCategory}
        />
      </Space>
    </div>
  );
}
export default SearchUi;
