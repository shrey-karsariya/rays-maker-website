import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AppContextProvider } from "@/context/AppContext";
import { PreloaderScreen } from "@/components/PreloaderScreen";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center hero-bg px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display font-extrabold text-primary text-7xl">404</h1>
        <h2 className="mt-4 text-xl font-display font-extrabold text-primary">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-2xl navy-bg text-primary-foreground px-6 py-3 text-sm font-medium shadow-luxe"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center hero-bg px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-display font-extrabold text-primary">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Try again or head home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-2xl navy-bg text-primary-foreground px-5 py-2.5 text-sm font-medium"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-2xl border border-border bg-background px-5 py-2.5 text-sm font-medium"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "KitchStar Maker — Premium Cookware, Crafted in India" },
      {
        name: "description",
        content:
          "KitchStar Maker crafts premium pressure cookers, kadais, fry pans and cookware for every Indian kitchen. Crafted for Excellence.",
      },
      { name: "author", content: "KitchStar Maker" },
      { name: "theme-color", content: "#111439" },
      { property: "og:title", content: "KitchStar Maker — Premium Cookware" },
      {
        property: "og:description",
        content:
          "Premium cookware engineered for performance, safety and the everyday heat of home cooking.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;800;900&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <PreloaderScreen />
        <Navbar />
        <main className="min-h-screen w-full overflow-x-hidden">
          <Outlet />
        </main>
        <Footer />

        {/* Floating WhatsApp Widget */}
        <a
          href="https://wa.me/919876543210?text=Hello%20KitchStar%20Maker%2C%20I%20am%20interested%20in%20your%20premium%20cookware%20range."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-luxe hover:bg-[#20ba5a] hover:scale-108 transition-all duration-300 group"
          aria-label="Chat on WhatsApp"
        >
          <svg
            className="w-7 h-7 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.503 4.94 1.505 5.548 0 10.064-4.512 10.068-10.066.002-2.69-1.047-5.216-2.951-7.123-1.905-1.907-4.432-2.957-7.122-2.959-5.553 0-10.069 4.513-10.073 10.068-.001 1.884.5 3.729 1.453 5.372l-.994 3.634 3.737-.981zm11.387-5.464c-.307-.154-1.817-.897-2.097-.999-.281-.102-.485-.154-.69.154-.204.307-.791.999-.969 1.203-.179.204-.358.226-.665.072-3.136-1.567-4.341-2.73-5.228-4.25-.237-.406-.026-.624.178-.829.183-.184.407-.478.612-.716.204-.239.272-.409.408-.683.136-.273.068-.512-.034-.716-.102-.204-.897-2.158-1.23-2.959-.324-.779-.652-.673-.897-.685-.232-.012-.497-.015-.762-.015-.265 0-.697.1-1.062.495-.366.397-1.396 1.365-1.396 3.328 0 1.963 1.429 3.856 1.629 4.129.201.273 2.812 4.293 6.812 6.022.952.412 1.696.657 2.278.842 1.002.319 1.916.274 2.639.167.806-.12 1.817-.742 2.073-1.422.255-.68.255-1.263.179-1.396-.076-.134-.281-.22-.588-.374z" />
          </svg>
          <span className="absolute right-16 bg-[#1a1a1a] text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-lg whitespace-nowrap">
            Chat with us
          </span>
        </a>
      </AppContextProvider>
    </QueryClientProvider>
  );
}
