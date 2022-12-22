import {Helmet} from 'react-helmet';

function openLogin() {
  window.netlifyIdentity.open();
}

export default function LandingPage() {
  return (
    <div>
      <Helmet script={[{src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'}]}/>
      This is the landing page.
      <button onClick={() => {openLogin()}}> Login </button>
    </div>
  );
}
