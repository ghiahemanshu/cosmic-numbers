import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Heart,
  Target,
  User,
  Briefcase,
  Palette,
  Car,
  Phone,
  Home,
  Calendar,
  BarChart3,
  LineChart,
  Layout,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    title: "Love and Marriage Compatibility",
    description: "Discover your romantic compatibility through numbers",
    icon: Heart,
  },
  {
    title: "Life Goals",
    description: "Align your path with your numerological destiny",
    icon: Target,
  },
  {
    title: "Know Your Personality",
    description: "Uncover your true self through numerology",
    icon: User,
  },
  {
    title: "Job Opportunities",
    description: "Find career paths aligned with your numbers",
    icon: Briefcase,
  },
  {
    title: "Lucky Colors",
    description: "Discover colors that enhance your fortune",
    icon: Palette,
  },
  {
    title: "Lucky Car Number",
    description: "Choose the perfect number for your vehicle",
    icon: Car,
  },
  {
    title: "Lucky Mobile Number",
    description: "Select a phone number that brings prosperity",
    icon: Phone,
  },
  {
    title: "Lucky Flat/House Number",
    description: "Find your ideal residential number",
    icon: Home,
  },
  {
    title: "Daily Forecast",
    description: "Your daily numerological guidance",
    icon: Calendar,
  },
  {
    title: "Monthly Forecast",
    description: "Monthly insights through numerology",
    icon: BarChart3,
  },
  {
    title: "Yearly Forecast",
    description: "Annual predictions based on your numbers",
    icon: LineChart,
  },
  {
    title: "Logos and Website Designs",
    description: "Numerology-aligned branding solutions",
    icon: Layout,
  },
  {
    title: "Personal Consultation",
    description: "One-on-one numerological guidance",
    icon: MessageCircle,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
          <p className="text-lg text-gray-700">
            Discover how numerology can transform your life
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;