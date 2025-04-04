import type {
  NextComponentType,
  NextLayoutComponentType,
  NextPageContext,
} from 'next';
import type { AppProps } from 'next/app';

declare module 'next' {
  type NextLayoutComponentType<P = object> = NextComponentType<
    NextPageContext,
    never,
    P
  > & {
    getLayout?: (page: ReactNode) => ReactNode;
  };
}

declare module 'next/app' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type AppLayoutProps<P = object> = AppProps & {
    Component: NextLayoutComponentType;
  };
}
