import './index.css'

const CategoryItem = props => {
  const {item, activeTab, updateActiveId} = props
  const {name, id} = item
  const isActive = id === activeTab
  console.log(isActive)
  const tabStyle = isActive ? 'active-tab' : 'tab'
  const onTab = () => updateActiveId(id)
  return (
    <li className="item-category-li-container" onClick={onTab}>
      <a className={tabStyle} href={`#${name}`}>
        {name}
      </a>
    </li>
  )
}

export default CategoryItem
