import { useNavigate } from "react-router-dom"


export default function AboutPage() {

const navigate = useNavigate();

function backButton() {
  navigate(-1)
}


  return (
    <div>
    <h1>Welcome to DevConnect!</h1>
    <p>
      DevConnect is a powerful and intuitive platform designed to streamline collaboration and communication among software developers. Our mission is to bring developers together, fostering a community where ideas can flourish, and innovation can thrive.
    </p>
    <h2>About DevConnect</h2>
    <p>
      Launched in 2023, DevConnect offers a suite of tools that enhance project management, code sharing, and real-time collaboration. Whether you're working on a solo project or part of a large team, DevConnect provides the resources you need to succeed. Our features include integrated version control, task tracking, and an extensive library of development resources.
    </p>
    <h2>Meet Our Developers</h2>
    <p>
      Our team is composed of passionate and experienced developers who are committed to building the best platform for their peers. Here are a few key members of our team:
    </p>
    <ul>
      <li><strong>Jane Doe</strong> - Lead Developer: Jane has over 10 years of experience in full-stack development and has worked on numerous high-profile projects. She is a Python and JavaScript enthusiast.</li>
      <li><strong>John Smith</strong> - Front-End Developer: John specializes in creating sleek and responsive user interfaces. He is an expert in React and has a keen eye for design.</li>
      <li><strong>Emily Johnson</strong> - Back-End Developer: Emily excels in server-side development and database management. She ensures that our platform runs smoothly and efficiently.</li>
      <li><strong>Michael Brown</strong> - DevOps Engineer: Michael is responsible for our deployment and continuous integration processes. He has a deep understanding of cloud infrastructure and automation.</li>
    </ul>
    <h2>Join Our Community</h2>
    <p>
      We invite you to join the DevConnect community and start collaborating with developers from around the world. Sign up today and see how DevConnect can help you bring your projects to life!
    </p>
    <div>
      <button onClick={backButton}>Back</button>
    </div>
  </div>
  
  )
}
