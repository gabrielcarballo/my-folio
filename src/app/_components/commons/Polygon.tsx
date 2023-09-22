import styles from '../css/TechStack.module.css';

interface ToggleCollapseProps {
  divText: string;
  isCollapsed: boolean;
}

export default function ToggleCollapse({ divText, isCollapsed }: ToggleCollapseProps) {
  return (
    <>
      <div className='flex row space-x-2'>
        <svg viewBox="0 0 100 100" className={`${styles.polygon} ${isCollapsed ? styles.rotate : ''}`}>
          <polygon points="5.9,88.2 50,11.8 94.1,88.2 "></polygon>
        </svg>
        <span>{divText}</span>
      </div>
    </>
  )
}