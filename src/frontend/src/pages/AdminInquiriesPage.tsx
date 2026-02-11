import { useState } from 'react';
import { useGetAllInquiries, useUpdateInquiryStatus, useDeleteInquiry } from '../hooks/useQueries';
import { AdminStatus } from '../backend';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2, Trash2, ArrowUpDown } from 'lucide-react';
import { toast } from 'sonner';

const statusOptions: AdminStatus[] = [
  AdminStatus.pending,
  AdminStatus.inProgress,
  AdminStatus.completed,
  AdminStatus.approved,
  AdminStatus.rejected,
  AdminStatus.paused,
];

const statusLabels: Record<AdminStatus, string> = {
  [AdminStatus.pending]: 'Pending',
  [AdminStatus.inProgress]: 'In Progress',
  [AdminStatus.completed]: 'Completed',
  [AdminStatus.approved]: 'Approved',
  [AdminStatus.rejected]: 'Rejected',
  [AdminStatus.paused]: 'Paused',
};

const statusColors: Record<AdminStatus, string> = {
  [AdminStatus.pending]: 'bg-yellow-100 text-yellow-800',
  [AdminStatus.inProgress]: 'bg-blue-100 text-blue-800',
  [AdminStatus.completed]: 'bg-green-100 text-green-800',
  [AdminStatus.approved]: 'bg-emerald-100 text-emerald-800',
  [AdminStatus.rejected]: 'bg-red-100 text-red-800',
  [AdminStatus.paused]: 'bg-gray-100 text-gray-800',
};

export default function AdminInquiriesPage() {
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortReverse, setSortReverse] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState<bigint | null>(null);
  const [newStatus, setNewStatus] = useState<AdminStatus>(AdminStatus.pending);
  const [adminNotes, setAdminNotes] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { data: inquiries, isLoading } = useGetAllInquiries(sortField, sortReverse);
  const updateStatus = useUpdateInquiryStatus();
  const deleteInquiry = useDeleteInquiry();

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortReverse(!sortReverse);
    } else {
      setSortField(field);
      setSortReverse(false);
    }
  };

  const handleUpdateStatus = async () => {
    if (selectedInquiry === null) return;

    try {
      await updateStatus.mutateAsync({
        inquiryId: selectedInquiry,
        newStatus,
        notes: adminNotes.trim() || undefined,
      });
      toast.success('Inquiry status updated successfully');
      setIsDialogOpen(false);
      setSelectedInquiry(null);
      setAdminNotes('');
    } catch (error: any) {
      toast.error(error.message || 'Failed to update status');
    }
  };

  const handleDelete = async (id: bigint) => {
    if (!confirm('Are you sure you want to delete this inquiry?')) return;

    try {
      await deleteInquiry.mutateAsync(id);
      toast.success('Inquiry deleted successfully');
    } catch (error: any) {
      toast.error(error.message || 'Failed to delete inquiry');
    }
  };

  const openStatusDialog = (inquiryId: bigint, currentStatus: AdminStatus) => {
    setSelectedInquiry(inquiryId);
    setNewStatus(currentStatus);
    setAdminNotes('');
    setIsDialogOpen(true);
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-lic-primary" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-lic-text">Manage Inquiries</h1>
        <p className="mt-2 text-lic-text/70">View and manage all customer inquiries</p>
      </div>

      <div className="rounded-lg border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Policy Interest</TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSort('status')}
                  className="flex items-center gap-1"
                >
                  Status
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSort('createdAt')}
                  className="flex items-center gap-1"
                >
                  Created
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inquiries && inquiries.length > 0 ? (
              inquiries.map((inquiry) => (
                <TableRow key={inquiry.id.toString()}>
                  <TableCell className="font-medium">{inquiry.id.toString()}</TableCell>
                  <TableCell>{inquiry.name}</TableCell>
                  <TableCell>{inquiry.phone}</TableCell>
                  <TableCell>{inquiry.email}</TableCell>
                  <TableCell>{inquiry.policyInterest}</TableCell>
                  <TableCell>
                    <Badge className={statusColors[inquiry.status]}>
                      {statusLabels[inquiry.status]}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(Number(inquiry.createdAt) / 1000000).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => openStatusDialog(inquiry.id, inquiry.status)}
                      >
                        Update
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(inquiry.id)}
                        disabled={deleteInquiry.isPending}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="text-center text-lic-text/70">
                  No inquiries found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Inquiry Status</DialogTitle>
            <DialogDescription>
              Change the status and add optional admin notes
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select
                value={newStatus}
                onValueChange={(value) => setNewStatus(value as AdminStatus)}
              >
                <SelectTrigger id="status">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map((status) => (
                    <SelectItem key={status} value={status}>
                      {statusLabels[status]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Admin Notes (Optional)</Label>
              <Textarea
                id="notes"
                value={adminNotes}
                onChange={(e) => setAdminNotes(e.target.value)}
                placeholder="Add any notes about this status change..."
                rows={4}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleUpdateStatus} disabled={updateStatus.isPending}>
              {updateStatus.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Update Status
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
