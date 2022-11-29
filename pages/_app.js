import Layout from '../common/Layout';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/Global.scss'
import '../styles/Header.scss'
import  '../styles/Footer.scss'
import '../styles/Navbar.scss'



function MyApp({ Component, pageProps }) {
  console.log('pageProps', pageProps);
  return (
      <Layout >
          <Component  {...pageProps} />
      </Layout>
    )
}

export default MyApp
