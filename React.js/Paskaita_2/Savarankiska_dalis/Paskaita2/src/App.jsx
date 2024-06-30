import './App.css'
import HeaderLogo from './components/HeaderLogo/HeaderLogo'
import Link from './components/Link/Link'
import MainSectionLogo from './components/MainSectionLogo/MainSectionLogo'
import MainSectionText from './components/MainSectionText/MainSectionText'

function App() {
 
  const loremText1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.";

  const loremText2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.";

  return (
    <div>
      <header>
      <HeaderLogo/>
      <div className='headerContainer' >
     <Link text={"Home"}/>
     <Link text={"About"}/>
     <Link text={"Contact"}/>
      </div>
      </header>
      <main className='mainContainer'>
        <MainSectionLogo />
        <div>
          <MainSectionText 
          title={"About"}
          text={loremText1} />
        </div>
        <div>
        <MainSectionText 
          title={"Contacts"}
          text={loremText2} />
        </div>
      </main>
    </div>
  )
}

export default App
