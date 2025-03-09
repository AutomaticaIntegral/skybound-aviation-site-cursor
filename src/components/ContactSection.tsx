import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/components/ui/use-toast';
import BarcelonaMap from './BarcelonaMap';

const ContactSection = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, form data would be sent to a backend service
    console.log("Form submitted");
    // Show a success message using the toast component
    toast({
      title: t('contact.form.submitSuccess'),
      description: t('contact.form.submitSuccessDetail'),
    });
  };

  return (
    <section id="contact" className="container-section">
      <h2 className="section-title">{t('contact.title')}</h2>
      <p className="section-subtitle">
        {t('contact.subtitle')}
      </p>
      
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">{t('contact.getInTouch')}</h3>
          <p className="mb-6">
            {t('contact.getInTouchText')}
          </p>
          
          <div className="space-y-4 mt-8">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-skyblue/10 flex items-center justify-center mr-4">
                <Phone className="h-5 w-5 text-skyblue" />
              </div>
              <div>
                <p className="font-medium">{t('contact.phone')}</p>
                <p className="text-charcoal-light">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-skyblue/10 flex items-center justify-center mr-4">
                <Mail className="h-5 w-5 text-skyblue" />
              </div>
              <div>
                <p className="font-medium">{t('contact.email')}</p>
                <p className="text-charcoal-light">info@olmoaviation.com</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-skyblue/10 flex items-center justify-center mr-4">
                <MapPin className="h-5 w-5 text-skyblue" />
              </div>
              <div>
                <p className="font-medium">{t('contact.address')}</p>
                <p className="text-charcoal-light">123 Aviation Blvd, Seattle, WA 98101, USA</p>
              </div>
            </div>
          </div>
          
          {/* Integración del mapa de Barcelona */}
          <div className="mt-8">
            <BarcelonaMap />
          </div>
        </div>
        
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">
                {t('contact.form.fullName')}
              </label>
              <Input 
                id="name" 
                name="name" 
                placeholder={t('contact.form.fullName')} 
                required 
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
                {t('contact.form.emailAddress')}
              </label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder={t('contact.form.emailAddress')} 
                required 
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1">
                {t('contact.form.phoneNumber')}
              </label>
              <Input 
                id="phone" 
                name="phone" 
                placeholder={t('contact.form.phoneNumber')} 
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">
                {t('contact.form.message')}
              </label>
              <Textarea 
                id="message" 
                name="message" 
                placeholder={t('contact.form.messageDetails')} 
                required 
                className="w-full min-h-[150px]"
              />
            </div>
            
            <Button type="submit" className="w-full bg-skyblue hover:bg-skyblue-dark">
              {t('contact.form.sendMessage')}
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
