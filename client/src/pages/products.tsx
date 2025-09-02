import Navigation from "@/components/navigation";
import ProductCatalog from "@/components/product-catalog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  FileText, 
  Award, 
  Shield, 
  Zap,
  CheckCircle,
  ExternalLink
} from "lucide-react";

export default function Products() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const certifications = [
    "IEC61215:2021 / IEC61730:2023",
    "IEC61701 / IEC62716 / IEC60068 / IEC62804", 
    "ISO9001:2015: Quality Management System",
    "ISO14001:2015: Environment Management System",
    "ISO45001:2018: Occupational Health & Safety",
    "TÜV, CE, IEC, UL Certified"
  ];

  return (
    <div className="bg-gray-50 text-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <header className="pt-16 gradient-bg text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg text-[#4b5563]">
            JinKO Solar Products
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-medium drop-shadow-md text-[#4b5563] max-w-3xl mx-auto">
            Professional-grade N-type solar panels with comprehensive technical documentation and industry-leading specifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 text-lg font-semibold"
              onClick={() => scrollToSection('catalog')}
              data-testid="button-view-catalog"
            >
              View Product Catalog
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-blue-600 bg-transparent text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold"
              onClick={() => scrollToSection('technical-hub')}
              data-testid="button-technical-specs"
            >
              Technical Specifications
            </Button>
          </div>
        </div>
      </header>

      {/* Product Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Solar Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our complete range of JinKO Solar N-type panels, featuring cutting-edge technology and exceptional performance guarantees.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">N-type Technology</h3>
              <p className="text-gray-600">Advanced Tunnel Oxide Passivating Contacts (TOPCon) technology for superior efficiency.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">HOT 3.0 Technology</h3>
              <p className="text-gray-600">Enhanced reliability and efficiency with JinkoSolar's latest HOT 3.0 innovation.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Extended Warranty</h3>
              <p className="text-gray-600">Up to 25-year product warranty with 30-year linear power guarantee.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Global Certification</h3>
              <p className="text-gray-600">Meets all international standards including IEC, TÜV, CE, and UL certifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section id="catalog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ProductCatalog />
        </div>
      </section>

      {/* Technical Specification Hub */}
      <section id="technical-hub" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Specification Hub</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access comprehensive technical documentation, performance data, and installation guidelines for all JinKO Solar products.
            </p>
          </div>


          {/* Certifications Section */}
          <Card className="bg-gradient-to-r from-blue-50 to-green-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Global Certifications & Standards</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <CheckCircle className="text-green-500 h-5 w-5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Performance Data Section */}
          <div className="mt-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Performance Curves & Electrical Characteristics</CardTitle>
                <p className="text-gray-600">
                  All JinKO Solar panels include detailed power-voltage and current-voltage curves for precise system design.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">22.26%</div>
                    <div className="text-sm text-gray-600">Up to Maximum Efficiency</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">650W+</div>
                    <div className="text-sm text-gray-600">Maximum Power Output</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-orange-600 mb-2">-0.29%/°C</div>
                    <div className="text-sm text-gray-600">Temperature Coefficient</div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Button size="lg" data-testid="button-download-all-specs">
                    <Download className="h-5 w-5 mr-2" />
                    Download All Technical Specifications
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 drop-shadow-lg">Need Technical Support?</h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-8 font-medium drop-shadow-md">
            Our technical team provides comprehensive support for system design, installation guidance, and performance optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 text-lg font-semibold"
              data-testid="button-technical-support"
            >
              Contact Technical Team
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-blue-600 bg-transparent text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold"
              data-testid="button-system-design"
            >
              Request System Design
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}