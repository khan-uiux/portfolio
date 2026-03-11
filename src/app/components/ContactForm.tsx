import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { toast } from "sonner";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = "YOUR_SERVICE_ID";
      const templateId = "YOUR_TEMPLATE_ID";
      const publicKey = "YOUR_PUBLIC_KEY";

      // Check if credentials are configured
      if (serviceId === "YOUR_SERVICE_ID" || templateId === "YOUR_TEMPLATE_ID" || publicKey === "YOUR_PUBLIC_KEY") {
        // Fallback: Open default email client
        const mailtoLink = `mailto:rashidkhan622@gmail.com?subject=Project Inquiry from ${encodeURIComponent(formData.name)}&body=Name: ${encodeURIComponent(formData.name)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0APhone: ${encodeURIComponent(formData.phone)}%0D%0A%0D%0AProject Details:%0D%0A${encodeURIComponent(formData.project)}`;
        window.location.href = mailtoLink;
        toast.success("Opening your email client...");
        setFormData({ name: "", email: "", phone: "", project: "" });
        setIsSubmitting(false);
        return;
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.project,
        to_email: "rashidkhan622@gmail.com"
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", project: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      
      // Fallback: Open default email client
      const mailtoLink = `mailto:rashidkhan622@gmail.com?subject=Project Inquiry from ${encodeURIComponent(formData.name)}&body=Name: ${encodeURIComponent(formData.name)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0APhone: ${encodeURIComponent(formData.phone)}%0D%0A%0D%0AProject Details:%0D%0A${encodeURIComponent(formData.project)}`;
      window.location.href = mailtoLink;
      toast.info("Opening your email client as fallback...");
      setFormData({ name: "", email: "", phone: "", project: "" });
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
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="relative rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black p-6 lg:p-8 overflow-hidden max-h-[500px]"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '30px 30px'
            }}></div>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Side - Contact Info */}
            <div
              className="space-y-4"
            >
              {/* Phone */}
              <div
                className="flex items-center gap-3"
              >
                <div className="p-2 rounded-full bg-gradient-to-br from-violet-500/20 to-blue-500/20 border border-violet-300/30">
                  <Phone className="h-4 w-4 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-gray-400 uppercase">Phone</h3>
                  <a 
                    href="tel:+918053230589" 
                    className="text-sm font-medium text-white hover:text-violet-400 transition-colors"
                  >
                    +91 8053230589
                  </a>
                </div>
              </div>

              {/* Email */}
              <div
                className="flex items-center gap-3"
              >
                <div className="p-2 rounded-full bg-gradient-to-br from-violet-500/20 to-blue-500/20 border border-violet-300/30">
                  <Mail className="h-4 w-4 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-gray-400 uppercase">Email</h3>
                  <a 
                    href="mailto:rashidkhan622@gmail.com" 
                    className="text-sm font-medium text-white hover:text-violet-400 transition-colors"
                  >
                    rashidkhan622@gmail.com
                  </a>
                </div>
              </div>

              {/* Country */}
              <div
                className="flex items-center gap-3"
              >
                <div className="p-2 rounded-full bg-gradient-to-br from-violet-500/20 to-blue-500/20 border border-violet-300/30">
                  <MapPin className="h-4 w-4 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-gray-400 uppercase">Country</h3>
                  <p className="text-sm font-medium text-white">India</p>
                </div>
              </div>

              {/* Availability Status */}
              <div
                className="pt-4 border-t border-gray-700/50 space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <p className="text-xs text-gray-300">
                    Available - 40 Hours/Weekly
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <p className="text-xs text-gray-300">
                    Active Status
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div
            >
              <div className="mb-4">
                <h2
                  className="text-2xl lg:text-3xl font-bold text-white"
                >
                  Let's work together!
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name */}
                <div
                >
                  <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm rounded-lg bg-gray-700/50 border border-gray-600/50 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div
                  >
                    <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-1">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 text-sm rounded-lg bg-gray-700/50 border border-gray-600/50 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                      placeholder="Your email"
                    />
                  </div>

                  <div
                  >
                    <label htmlFor="phone" className="block text-xs font-medium text-gray-300 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm rounded-lg bg-gray-700/50 border border-gray-600/50 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                      placeholder="Your phone"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div
                >
                  <label htmlFor="project" className="block text-xs font-medium text-gray-300 mb-1">
                    Tell Us About Project *
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2 text-sm rounded-lg bg-gray-700/50 border border-gray-600/50 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <div
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white font-semibold px-6 py-2.5 text-sm rounded-lg shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Get in touch"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}