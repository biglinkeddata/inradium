import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Parallax from "@/components/Parallax";
import { useEffect, useState } from "react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional(),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    toast.success("Message sent! We'll get back to you soon.");
    form.reset();
  };

  return (
    <section id="contact" className="py-24 bg-section-medium text-section-medium-foreground transition-colors duration-500 relative overflow-hidden">
      {/* Decorative parallax elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Parallax speed={0.25}>
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        </Parallax>
        <Parallax speed={-0.15}>
          <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-secondary/5 blur-3xl" />
        </Parallax>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Parallax speed={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-section-medium-foreground">Get In Touch</h2>
            </Parallax>
            <Parallax speed={0.15} opacity>
              <p className="text-xl text-section-medium-foreground/70 font-normal" style={{ lineHeight: '1.6' }}>
                Ready to transform your data into intelligence? Let's talk.
              </p>
            </Parallax>
          </div>

          <div className="max-w-2xl mx-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-section-medium-foreground">Name *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          className="bg-white border-section-medium-foreground/20 text-section-medium-foreground"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-section-medium-foreground">Email *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          className="bg-white border-section-medium-foreground/20 text-section-medium-foreground"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-section-medium-foreground">Company</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your company"
                          className="bg-white border-section-medium-foreground/20 text-section-medium-foreground"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-section-medium-foreground">Message *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project..."
                          rows={5}
                          className="bg-white border-section-medium-foreground/20 text-section-medium-foreground"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-start">
                  <Button
                    type="submit"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 hover:border-primary"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
