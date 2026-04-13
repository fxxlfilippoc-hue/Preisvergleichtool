// middleware.js – Vercel Basic Auth
// Schützt alle Seiten mit HTTP-Authentifizierung (serverseitig)

export function middleware(req) {
  const auth = req.headers.get('authorization');
  const expected = 'Basic ' + btoa('einkauf:Einkauf2026Dashboard');

  if (auth !== expected) {
    return new Response('Zugang verweigert – bitte anmelden.', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Fahrrad XXL – Einkauf intern"',
      },
    });
  }
}

export const config = {
  matcher: '/:path*', // schützt alle Seiten/Routen
};
