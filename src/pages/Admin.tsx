
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Save, Key, FileText, Home, Layout } from 'lucide-react';
import AdminSidebar from '@/components/AdminSidebar';
import AdminTopbar from '@/components/AdminTopbar';
import AdminStats from '@/components/AdminStats';

const ADMIN_USER = "admin";
const ADMIN_PASS = "password123";

const Admin = () => {
  const { language, setLanguage, translations, updateTranslations, t } = useLanguage();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [editableTranslations, setEditableTranslations] = useState({});
  const [activeSection, setActiveSection] = useState('hero');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const auth = localStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
    
    setEditableTranslations(translations);
  }, [translations]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      setIsAuthenticated(true);
      localStorage.setItem('admin_auth', 'true');
    } else {
      toast({
        variant: "destructive",
        title: t('admin.login.error'),
        duration: 3000,
      });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_auth');
  };

  const handleLanguageChange = (value: string) => {
    setLanguage(value as 'es' | 'en' | 'ca');
    setEditableTranslations(translations);
  };

  const handleInputChange = (key: string, value: string) => {
    const keys = key.split('.');
    let newTranslations = { ...editableTranslations };
    let current = newTranslations;
    
    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) current[keys[i]] = {};
      current = current[keys[i]];
    }
    
    current[keys[keys.length - 1]] = value;
    setEditableTranslations(newTranslations);
  };

  const saveChanges = () => {
    updateTranslations(editableTranslations);
    toast({
      title: t('admin.success'),
      duration: 3000,
    });
  };

  const renderEditableFields = (section: string, prefix: string) => {
    let sectionData = translations[section];
    if (!sectionData) return null;
    
    return renderFieldsRecursive(sectionData, prefix || section);
  };

  const renderFieldsRecursive = (obj: any, prefix: string) => {
    return Object.entries(obj).map(([key, value]) => {
      const fullKey = `${prefix}.${key}`;
      
      if (typeof value === 'object' && value !== null) {
        return (
          <div key={fullKey} className="mt-4">
            <h3 className="font-semibold text-lg mb-2 text-charcoal">{key}</h3>
            <div className="pl-4">
              {renderFieldsRecursive(value, fullKey)}
            </div>
          </div>
        );
      }
      
      return (
        <div key={fullKey} className="mb-4">
          <label className="block text-sm font-medium text-charcoal-dark mb-1">
            {key}
          </label>
          {(value as string).length > 80 ? (
            <Textarea
              value={getNestedValue(editableTranslations, fullKey)}
              onChange={(e) => handleInputChange(fullKey, e.target.value)}
              className="w-full"
            />
          ) : (
            <Input
              value={getNestedValue(editableTranslations, fullKey)}
              onChange={(e) => handleInputChange(fullKey, e.target.value)}
              className="w-full"
            />
          )}
        </div>
      );
    });
  };

  const getNestedValue = (obj: any, path: string) => {
    const keys = path.split('.');
    let result = obj;
    
    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key];
      } else {
        return '';
      }
    }
    
    return result;
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>{t('admin.login.title')}</CardTitle>
            <CardDescription>Enter your credentials to access the admin panel</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-charcoal mb-1">
                  {t('admin.login.username')}
                </label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-charcoal mb-1">
                  {t('admin.login.password')}
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-skyblue hover:bg-skyblue-dark">
                <Key className="mr-2 h-4 w-4" /> {t('admin.login.submit')}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="admin-layout">
      <AdminSidebar 
        collapsed={sidebarCollapsed} 
        toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} 
        onLogout={handleLogout}
      />
      
      <div className="admin-content">
        <AdminTopbar 
          username="Administrator" 
          language={language} 
          onLanguageChange={handleLanguageChange} 
        />
        
        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-charcoal-dark mb-2">{t('admin.subtitle')}</h1>
            <p className="text-muted-foreground">
              {t('admin.contentManagement')} - {language.toUpperCase()}
            </p>
          </div>
          
          <AdminStats />
          
          <Card>
            <CardHeader className="border-b">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" /> {t('admin.contentEditor')}
                  </CardTitle>
                  <CardDescription>
                    {t('admin.contentEditorDescription')}
                  </CardDescription>
                </div>
                <Button onClick={saveChanges} className="bg-skyblue hover:bg-skyblue-dark">
                  <Save className="mr-2 h-4 w-4" /> {t('admin.save')}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <Tabs defaultValue="hero" onValueChange={setActiveSection} className="mt-4">
                <TabsList className="grid grid-cols-6 mb-8">
                  <TabsTrigger value="hero" className="flex items-center gap-2">
                    <Home className="h-4 w-4" /> Hero
                  </TabsTrigger>
                  <TabsTrigger value="about" className="flex items-center gap-2">
                    <Layout className="h-4 w-4" /> About
                  </TabsTrigger>
                  <TabsTrigger value="services">Services</TabsTrigger>
                  <TabsTrigger value="stats">Stats</TabsTrigger>
                  <TabsTrigger value="contact">Contact</TabsTrigger>
                  <TabsTrigger value="footer">Footer</TabsTrigger>
                </TabsList>
                
                <TabsContent value="hero" className="space-y-4">
                  {renderEditableFields('hero', 'hero')}
                </TabsContent>
                
                <TabsContent value="about" className="space-y-4">
                  {renderEditableFields('about', 'about')}
                </TabsContent>
                
                <TabsContent value="services" className="space-y-4">
                  {renderEditableFields('services', 'services')}
                </TabsContent>
                
                <TabsContent value="stats" className="space-y-4">
                  {renderEditableFields('stats', 'stats')}
                </TabsContent>
                
                <TabsContent value="contact" className="space-y-4">
                  {renderEditableFields('contact', 'contact')}
                </TabsContent>
                
                <TabsContent value="footer" className="space-y-4">
                  {renderEditableFields('footer', 'footer')}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;
