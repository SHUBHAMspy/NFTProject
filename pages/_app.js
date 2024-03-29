import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen">
      
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
