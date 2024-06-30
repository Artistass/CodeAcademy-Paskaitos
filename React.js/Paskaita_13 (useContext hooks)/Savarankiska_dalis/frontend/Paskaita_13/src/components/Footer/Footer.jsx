import styles from './Footer.module.css';
import { useSettingsContext } from '../../Context/DarkAndLightModes';



export default function Footer() {

  const { isDarkMode } = useSettingsContext();


  return (
    <footer className={`${styles.footer} ${isDarkMode ? styles.dark : ''}`}>
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us through any of the following ways:</p>
      <ul>
        <li>Email: info@example.com</li>
        <li>Phone: +1 234 567 890</li>
        <li>Address: 123 Main Street, Anytown, USA</li>
      </ul>
      <p>Follow us on social media:</p>
      <ul>
        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>
      <p>&copy; 2024 Example Company. All rights reserved.</p>
    </footer>
  );
}
