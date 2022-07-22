import { json, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import styles from "./styles/app.css";
import indexStyles from "./styles/index.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Tareas - Crear tarea",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const data = useLoaderData();

  const client = new ApolloClient({
    uri: `${data.ENV.EZE_API_URL}graphql`,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <html lang="en">
        <head>
          <Meta />
          <Links />
        </head>
        <body>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </ApolloProvider>
  );
}

export function loader() {
  return json({
    ENV: {
      EZE_API_URL: process.env.EZE_API_URL,
      HOLDED_PROJECT_ID: process.env.HOLDED_PROJECT_ID,
    },
  });
}

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: indexStyles },
  ];
}
