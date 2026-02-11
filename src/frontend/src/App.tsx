import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import HomePage from './pages/HomePage';
import AboutLicPage from './pages/AboutLicPage';
import PolicyDetailsPage from './pages/PolicyDetailsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import JoinAsAgentPage from './pages/JoinAsAgentPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AdminInquiriesPage from './pages/AdminInquiriesPage';
import AdminApplicationsPage from './pages/AdminApplicationsPage';
import SiteHeader from './components/site/SiteHeader';
import SiteFooter from './components/site/SiteFooter';
import FloatingContactButtons from './components/site/FloatingContactButtons';
import MobileNumberPromptProvider from './components/site/MobileNumberPromptProvider';

const queryClient = new QueryClient();

function Layout() {
  return (
    <MobileNumberPromptProvider>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <FloatingContactButtons />
      </div>
    </MobileNumberPromptProvider>
  );
}

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutLicPage,
});

const policiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/policies',
  component: PolicyDetailsPage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: ServicesPage,
});

const joinAgentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/join-agent',
  component: JoinAsAgentPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const adminDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin',
  component: AdminDashboardPage,
});

const adminInquiriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/inquiries',
  component: AdminInquiriesPage,
});

const adminApplicationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/applications',
  component: AdminApplicationsPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  policiesRoute,
  servicesRoute,
  joinAgentRoute,
  contactRoute,
  adminDashboardRoute,
  adminInquiriesRoute,
  adminApplicationsRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  );
}
