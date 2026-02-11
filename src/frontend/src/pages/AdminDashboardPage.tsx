import { Link } from '@tanstack/react-router';
import { useIsCallerAdmin } from '../hooks/useQueries';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Users, Loader2, AlertCircle } from 'lucide-react';

export default function AdminDashboardPage() {
  const { data: isAdmin, isLoading } = useIsCallerAdmin();

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-lic-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-md text-center">
          <AlertCircle className="mx-auto mb-4 h-12 w-12 text-red-500" />
          <h1 className="mb-2 text-2xl font-bold text-lic-text">Access Denied</h1>
          <p className="mb-6 text-lic-text/70">
            You do not have permission to access the admin dashboard.
          </p>
          <Link to="/">
            <Button>Return to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-lic-text">Admin Dashboard</h1>
        <p className="mt-2 text-lic-text/70">Manage inquiries and agent applications</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-lic-primary">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle>Inquiries</CardTitle>
                <CardDescription>Manage customer inquiries</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-lic-text/70">
              View, update status, and manage all customer policy inquiries.
            </p>
            <Link to="/admin/inquiries">
              <Button className="w-full">Manage Inquiries</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-lic-primary">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle>Agent Applications</CardTitle>
                <CardDescription>Manage agent applications</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-lic-text/70">
              View, update status, and manage all LIC agent applications.
            </p>
            <Link to="/admin/applications">
              <Button className="w-full">Manage Applications</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
