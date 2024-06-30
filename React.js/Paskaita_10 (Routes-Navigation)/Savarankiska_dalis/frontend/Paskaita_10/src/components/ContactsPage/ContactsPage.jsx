import { useNavigate } from "react-router-dom"

export default function ContactsPage() {

  const navigate = useNavigate();

  function backButton() {
    navigate(-1)
  }

  
  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us through any of the following methods:
      </p>
      <ul>
        <li><strong>Email:</strong> support@devconnect.com</li>
        <li><strong>Phone:</strong> +1 (555) 123-4567</li>
        <li><strong>Address:</strong> 123 Developer Lane, Suite 100, Tech City, CA 90210</li>
        <li><strong>Twitter:</strong> <a href="https://twitter.com/devconnect">@devconnect</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/company/devconnect">DevConnect Company Page</a></li>
      </ul>
      <h2>Join Our Community</h2>
      <p>
        We invite you to join the DevConnect community and start collaborating with developers from around the world. Sign up today and see how DevConnect can help you bring your projects to life!
      </p>
      <div><button onClick={backButton}>Back</button></div>
    </div>
  )
}
