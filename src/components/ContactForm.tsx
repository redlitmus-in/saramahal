"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { CalendarIcon, User, Mail, Phone, MessageSquare, Send } from "lucide-react"; 

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Please select a valid date.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

interface ContactFormProps {
  onFormSubmit: () => void;
}

export function ContactForm({ onFormSubmit }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      message: "",
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      // Create FormData for Web3Forms
      const formData = new FormData();
      formData.append("access_key", "e4021188-17c5-486f-a396-0985184f6949");
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("date", data.date);
      formData.append("message", data.message);

      // Send to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Your message has been sent successfully! We will get back to you shortly.");
        form.reset();
        onFormSubmit();
      } else {
        console.error("Error", result);
        toast.error("Failed to send message. Please try again or contact us directly.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  // Animation variants
  const formControls = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      }
    })
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            custom={0}
            variants={formControls}
            initial="hidden"
            whileInView="visible"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center">
                    <User className="w-4 h-4 mr-2 text-gray-500" />
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="John Doe" 
                      className="bg-gray-50 focus:bg-white transition-colors" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>
          
          <motion.div 
            custom={1}
            variants={formControls}
            initial="hidden"
            whileInView="visible"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-gray-500" />
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="you@example.com" 
                      className="bg-gray-50 focus:bg-white transition-colors" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          <motion.div 
            custom={2}
            variants={formControls}
            initial="hidden"
            whileInView="visible"
          >
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-gray-500" />
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="+91 12345 67890" 
                      className="bg-gray-50 focus:bg-white transition-colors" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          <motion.div 
            custom={3}
            variants={formControls}
            initial="hidden"
            whileInView="visible"
          >
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-2 text-gray-500" />
                    Preferred Visit Date
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input 
                        type="date" 
                        className="bg-gray-50 focus:bg-white transition-colors" 
                        {...field} 
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>
        </div>

        <motion.div 
          custom={4}
          variants={formControls}
          initial="hidden"
          whileInView="visible"
        >
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center">
                  <MessageSquare className="w-4 h-4 mr-2 text-gray-500" />
                  Your Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your event and what you're looking for..."
                    className="resize-none min-h-32 bg-gray-50 focus:bg-white transition-colors"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>
        
        <motion.div 
          custom={5}
          variants={formControls}
          initial="hidden"
          whileInView="visible"
        >
          <Button 
            type="submit" 
            size="lg" 
            className="w-full group"
            disabled={isSubmitting}
          >
            <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            {isSubmitting ? "Sending..." : "Send Enquiry"}
          </Button>
        </motion.div>
      </form>
    </Form>
  )
} 