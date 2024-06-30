import { useContext } from 'react';
import styles from './Header.module.css';
import { SettingsContext } from '../../Context/DarkAndLightModes';

export default function Header() {

const { isDarkMode, setIsDarkMode } = useContext(SettingsContext);

function toggleMode() {
  setIsDarkMode(!isDarkMode)
}

return (
  <div className={`${styles.header} ${isDarkMode ? styles.dark : ''}`}>
    <img 
      src={isDarkMode ? "https://icons.iconarchive.com/icons/goodstuff-no-nonsense/free-space/512/moon-dreamy-icon.png" 
                      : "https://static.vecteezy.com/system/resources/thumbnails/020/032/515/small_2x/sun-logo-template-of-sunrise-sunset-sunbursts-cute-sunshine-for-kids-cartoon-graphic-shape-sun-silhouette-sticker-png.png"} 
      alt={isDarkMode ? "Sun" : "Moon"} 
    />
    <button onClick={toggleMode}>{isDarkMode ? "Dark Mode" : "Light Mode"}</button>
  </div>
);

}