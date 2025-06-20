/// <reference types="vite/client" />
import { Providers } from '@/components/providers';
import appCss from '@/styles/app.css?url';
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import * as React from 'react';
import { NavigationBar } from '@/components/navbar';

export const Route = createRootRoute({
  head: () => ({
    links: [{ rel: 'stylesheet', href: appCss }],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body className='font-sans bg-background text-foreground antialiased'>
        <Providers>
          <NavigationBar />
          {children}
        </Providers>
        {/* <TanStackRouterDevtools position='bottom-right' /> */}
        <Scripts />
      </body>
    </html>
  );
}
