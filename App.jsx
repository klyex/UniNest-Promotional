import UniNestPromo from './components/UniNestPromo.jsx';

const promoRoutes = new Set(['/', '/promo', '/landing']);

function App() {
  const pathname = window.location.pathname;

  if (!promoRoutes.has(pathname)) {
    return (
      <main className="route-fallback">
        <a href="/promo">Open UniNest Promo</a>
      </main>
    );
  }

  return <UniNestPromo />;
}

export default App;
