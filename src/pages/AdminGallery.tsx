
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusCircle, Pencil, Trash, LogOut, Home, X, Save } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Get the extended gallery items from local storage or use default
// In a real app, this would come from a backend API
const getStoredGalleryItems = () => {
  const storedItems = localStorage.getItem('galleryItems');
  if (storedItems) {
    return JSON.parse(storedItems);
  }
  
  // Default extended gallery items
  return [
    { id: 1, category: 'classic', name: 'Vanilla Bean' },
    { id: 2, category: 'classic', name: 'Chocolate' },
    { id: 3, category: 'seasonal', name: 'Raspberry Rose' },
    { id: 4, category: 'signature', name: 'Lavender Honey' },
    { id: 5, category: 'classic', name: 'Pistachio' },
    { id: 6, category: 'seasonal', name: 'Pumpkin Spice' },
    { id: 7, category: 'signature', name: 'Champagne' },
    { id: 8, category: 'classic', name: 'Salted Caramel' },
    { id: 9, category: 'classic', name: 'Dark Chocolate' },
    { id: 10, category: 'classic', name: 'Hazelnut' },
    { id: 11, category: 'classic', name: 'Coffee' },
    { id: 12, category: 'seasonal', name: 'Strawberry Basil' },
    { id: 13, category: 'seasonal', name: 'Apple Cinnamon' },
    { id: 14, category: 'seasonal', name: 'Peppermint' },
    { id: 15, category: 'signature', name: 'Earl Grey' },
    { id: 16, category: 'signature', name: 'Matcha White Chocolate' },
    { id: 17, category: 'signature', name: 'Passion Fruit' },
    { id: 18, category: 'signature', name: 'Rose Lychee' },
    { id: 19, category: 'classic', name: 'Lemon' },
    { id: 20, category: 'classic', name: 'Red Velvet' },
  ];
};

type GalleryItem = {
  id: number;
  name: string;
  category: 'classic' | 'seasonal' | 'signature';
};

const AdminGallery = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(getStoredGalleryItems);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<GalleryItem | null>(null);
  const [newItem, setNewItem] = useState<Omit<GalleryItem, 'id'>>({ name: '', category: 'classic' });
  const { logout } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const saveItemsToStorage = (items: GalleryItem[]) => {
    localStorage.setItem('galleryItems', JSON.stringify(items));
  };

  const handleEditItem = (item: GalleryItem) => {
    setCurrentItem(item);
    setEditDialogOpen(true);
  };

  const handleUpdateItem = () => {
    if (!currentItem) return;
    
    const updatedItems = galleryItems.map(item => 
      item.id === currentItem.id ? currentItem : item
    );
    
    setGalleryItems(updatedItems);
    saveItemsToStorage(updatedItems);
    setEditDialogOpen(false);
    
    toast({
      title: "Item updated",
      description: `${currentItem.name} has been updated successfully.`,
    });
  };

  const handleDeleteItem = (id: number) => {
    const itemToDelete = galleryItems.find(item => item.id === id);
    const updatedItems = galleryItems.filter(item => item.id !== id);
    
    setGalleryItems(updatedItems);
    saveItemsToStorage(updatedItems);
    
    toast({
      title: "Item deleted",
      description: `${itemToDelete?.name} has been removed from your gallery.`,
    });
  };

  const handleAddItem = () => {
    if (!newItem.name.trim()) {
      toast({
        title: "Error",
        description: "Please enter a name for the macaron.",
        variant: "destructive",
      });
      return;
    }
    
    const maxId = Math.max(...galleryItems.map(item => item.id), 0);
    const newItemWithId = { ...newItem, id: maxId + 1 };
    const updatedItems = [...galleryItems, newItemWithId];
    
    setGalleryItems(updatedItems);
    saveItemsToStorage(updatedItems);
    setNewItem({ name: '', category: 'classic' });
    setAddDialogOpen(false);
    
    toast({
      title: "Item added",
      description: `${newItem.name} has been added to your gallery.`,
    });
  };

  return (
    <div className="min-h-screen bg-macaron-softPink/30 pb-12">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-serif text-macaron-darkPink">Gallery Management</h1>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="flex items-center gap-1"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Button>
            <Button 
              variant="outline" 
              onClick={handleLogout}
              className="flex items-center gap-1 text-macaron-darkPink"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium text-macaron-charcoal">Macaron Gallery Items</h2>
          
          <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                className="bg-macaron-darkPink hover:bg-macaron-darkPink/90 text-white flex items-center gap-1"
              >
                <PlusCircle className="h-4 w-4" />
                Add New Macaron
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Macaron</DialogTitle>
                <DialogDescription>
                  Enter the details for the new macaron flavor
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="new-name">Macaron Name</Label>
                  <Input
                    id="new-name"
                    value={newItem.name}
                    onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                    placeholder="Enter macaron name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="new-category">Category</Label>
                  <Select 
                    value={newItem.category} 
                    onValueChange={(value: 'classic' | 'seasonal' | 'signature') => 
                      setNewItem({...newItem, category: value})
                    }
                  >
                    <SelectTrigger id="new-category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="classic">Classic</SelectItem>
                      <SelectItem value="seasonal">Seasonal</SelectItem>
                      <SelectItem value="signature">Signature</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <DialogFooter>
                <Button variant="outline" onClick={() => setAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button 
                  className="bg-macaron-darkPink hover:bg-macaron-darkPink/90 text-white"
                  onClick={handleAddItem}
                >
                  Add Macaron
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
        {galleryItems.length === 0 ? (
          <Alert>
            <AlertDescription>
              No macarons in your gallery yet. Add some to get started!
            </AlertDescription>
          </Alert>
        ) : (
          <div className="bg-white rounded-md shadow overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {galleryItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell className="capitalize">{item.category}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEditItem(item)}
                        >
                          <Pencil className="h-4 w-4 text-macaron-darkPink/70" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteItem(item.id)}
                        >
                          <Trash className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </main>

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Macaron</DialogTitle>
            <DialogDescription>
              Update the details for this macaron flavor
            </DialogDescription>
          </DialogHeader>
          
          {currentItem && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="edit-name">Macaron Name</Label>
                <Input
                  id="edit-name"
                  value={currentItem.name}
                  onChange={(e) => setCurrentItem({...currentItem, name: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="edit-category">Category</Label>
                <Select 
                  value={currentItem.category} 
                  onValueChange={(value: 'classic' | 'seasonal' | 'signature') => 
                    setCurrentItem({...currentItem, category: value})
                  }
                >
                  <SelectTrigger id="edit-category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="classic">Classic</SelectItem>
                    <SelectItem value="seasonal">Seasonal</SelectItem>
                    <SelectItem value="signature">Signature</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setEditDialogOpen(false)}
              className="flex items-center gap-1"
            >
              <X className="h-4 w-4" />
              Cancel
            </Button>
            <Button 
              onClick={handleUpdateItem}
              className="bg-macaron-darkPink hover:bg-macaron-darkPink/90 text-white flex items-center gap-1"
            >
              <Save className="h-4 w-4" />
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminGallery;
