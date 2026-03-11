import { Header } from "../components/Header";
import { SocialLinks } from "../components/SocialLinks";
import { FreelanceAvailability } from "../components/FreelanceAvailability";
import { ExperienceLearning } from "../components/ExperienceLearning";
import { Footer } from "../components/Footer";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { PageHeader } from "@/app/components/PageHeader";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      // IMPORTANT: Replace these with your actual EmailJS credentials
      // 1. Sign up at https://www.emailjs.com/
      // 2. Create a service (Gmail, Outlook, etc.)
      // 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{phone}}, {{message}}
      // 4. Get your credentials from EmailJS dashboard
      
      const serviceId = "YOUR_SERVICE_ID"; // Replace with your Service ID
      const templateId = "YOUR_TEMPLATE_ID"; // Replace with your Template ID
      const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your Public Key

      // Check if credentials are configured
      if (serviceId === "YOUR_SERVICE_ID" || templateId === "YOUR_TEMPLATE_ID" || publicKey === "YOUR_PUBLIC_KEY") {
        // Fallback: Open default email client
        const mailtoLink = `mailto:rashidkhan622@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=Name: ${encodeURIComponent(formData.name)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0APhone: ${encodeURIComponent(formData.phone)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(formData.message)}`;
        window.location.href = mailtoLink;
        toast.success("Opening your email client...");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setIsSubmitting(false);
        return;
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: "rashidkhan622@gmail.com"
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      
      // Fallback: Open default email client
      const mailtoLink = `mailto:rashidkhan622@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=Name: ${encodeURIComponent(formData.name)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0APhone: ${encodeURIComponent(formData.phone)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(formData.message)}`;
      window.location.href = mailtoLink;
      toast.info("Opening your email client as fallback...");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page Header */}
          <div className="mb-16">
            <PageHeader 
              title="Let's Work Together" 
              subtitle="Have a project in mind? I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible."
            />
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 space-y-6"
            >
              {/* Contact Cards */}
              <div className="p-8 rounded-2xl bg-card border border-border">
                <div className="flex items-start gap-4 mb-6 pb-6 border-b border-border">
                  <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-950 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">PHONE</p>
                    <a href="tel:+918053230589" className="text-lg font-medium hover:text-violet-600 transition-colors">
                      +91 7838957053
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6 pb-6 border-b border-border">
                  <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-950 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">EMAIL</p>
                    <a href="mailto:irfanoptimistic@gmail.com" className="text-lg font-medium hover:text-violet-600 transition-colors break-all">
                      irfanoptimistic@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-950 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">COUNTRY</p>
                    <p className="text-lg font-medium">India</p>
                  </div>
                </div>
              </div>

              {/* Availability Info */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-50 to-blue-50 dark:from-violet-950/30 dark:to-blue-950/30 border border-violet-100 dark:border-violet-900">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-600"></span>
                    <span>Available for work – 40 Hours / Weekly</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                    <span>Active Status – Active</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-7"
            >
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card border border-border space-y-6">
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full px-0 py-3 border-0 border-b border-border bg-transparent focus:border-violet-600 focus:outline-none transition-colors text-base"
                  />
                </div>

                {/* Email and Phone Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email*"
                      required
                      className="w-full px-0 py-3 border-0 border-b border-border bg-transparent focus:border-violet-600 focus:outline-none transition-colors text-base"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      className="w-full px-0 py-3 border-0 border-b border-border bg-transparent focus:border-violet-600 focus:outline-none transition-colors text-base"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell Us About Project *"
                    required
                    rows={6}
                    className="w-full px-0 py-3 border-0 border-b border-border bg-transparent focus:border-violet-600 focus:outline-none transition-colors text-base resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium flex items-center gap-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Get In Touch
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}