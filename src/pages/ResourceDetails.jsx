// src/pages/ResourceDetails.jsx
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from 'react';

const ResourceDetails = () => {
  const { id } = useParams();
  const [resource, setResource] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // In a real application, this would likely be an API call
    // For this example, we'll fetch from our mock data
    try {
      // Import the resource data from a centralized location
      // This is just an example - you should adapt based on your data structure
      const resourcesData = [
        {
          id: 1,
          title: 'Startup India Seed Fund Scheme',
          category: 'Government Scheme',
          description: 'Financial assistance up to ₹5 crore to DPIIT-recognized startups for proof of concept, prototype development, product trials, and market entry.',
          imageUrl: 'https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          source: 'Startup India',
          eligibility: [
            'DPIIT registered startups',
            'Incorporated not more than 2 years ago',
            'Working towards innovation or development of products/services',
            'Scalable business model with high potential'
          ],
          applicationProcess: 'Apply through the Startup India portal with required documentation.',
          benefits: 'Financial support, mentorship, networking opportunities',
          contactEmail: 'support@startupindia.gov.in'
        },
        {
          id: 2,
          title: 'Y Combinator',
          category: 'Accelerator',
          description: 'Twice a year, Y Combinator invests in a large number of startups. The startups move to Silicon Valley for 3 months, where they work intensively with YC partners.',
          imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          source: 'Y Combinator',
          eligibility: [
            'Early-stage startups with promising ideas',
            'Strong founding team with technical capabilities',
            'Innovative product or service with growth potential',
            'Global market aspirations'
          ],
          applicationProcess: 'Apply online through the Y Combinator website. Selected companies will be invited for interviews.',
          benefits: '$500,000 investment, mentorship from industry leaders, networking with alumni and investors, demo day presentation',
          contactEmail: 'info@ycombinator.com'
        },
        {
          id: 3,
          title: 'MUDRA Loan Scheme',
          category: 'Loan Scheme',
          description: 'Micro Units Development & Refinance Agency (MUDRA) provides loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises through various partner banks.',
          imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          source: 'MUDRA Bank',
          eligibility: [
            'Small businesses and entrepreneurs',
            'Non-corporate, non-farm enterprises',
            'Manufacturing, trading, and service sector enterprises',
            'No collateral required for loans up to ₹10 lakh'
          ],
          applicationProcess: 'Apply through commercial banks, RRBs, small finance banks, NBFCs, and MFIs.',
          benefits: 'Three loan products - Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 lakh), and Tarun (₹5 lakh to ₹10 lakh)',
          contactEmail: 'support@mudra.org.in'
        },
        {
          id: 4,
          title: 'T-Hub Incubation Program',
          category: 'Incubator',
          description: 'T-Hub is one of India\'s largest startup incubators, providing workspace, mentorship, networking opportunities, and access to funding for early-stage startups.',
          imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          source: 'T-Hub',
          eligibility: [
            'Early-stage startups with innovative solutions',
            'Technology-focused enterprises',
            'Preferably registered in Telangana',
            'Scalable business model'
          ],
          applicationProcess: 'Apply online through the T-Hub website. Selected startups undergo an interview process.',
          benefits: 'Co-working space, mentorship, access to investors, networking events, corporate connections',
          contactEmail: 'info@t-hub.co'
        },
        {
          id: 5,
          title: 'SIDBI Fund of Funds for Startups',
          category: 'Funding',
          description: 'A ₹10,000 crore fund established by SIDBI to support alternative investment funds (AIFs) that invest in startups. Indirectly provides capital to eligible startups.',
          imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          source: 'SIDBI',
          eligibility: [
            'DPIIT recognized startups',
            'Innovative business model',
            'High growth potential',
            'Early to growth stage startups'
          ],
          applicationProcess: 'Startups need to approach SIDBI-backed AIFs for funding. SIDBI doesn\'t directly fund startups through this scheme.',
          benefits: 'Access to capital, strategic mentorship from fund managers, networking opportunities',
          contactEmail: 'sfs@sidbi.in'
        },
        {
          id: 6,
          title: 'Intellectual Property Facilitation Center (IPFC)',
          category: 'IP Protection',
          description: 'Provides IP related services to MSMEs including patent, trademark, copyright registration assistance, IP training, and awareness programs.',
          imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          source: 'Ministry of MSME',
          eligibility: [
            'Registered MSMEs',
            'Startups with innovative products or services',
            'Entities requiring IP protection',
            'Need for IP related advisory services'
          ],
          applicationProcess: 'Contact the nearest IPFC center or apply through the MSME website.',
          benefits: 'Subsidized patent filing, trademark registration assistance, IP consulting, technology commercialization support',
          contactEmail: 'ipfc@msme.gov.in'
        },
        {
          id: 7,
          title: 'Atal Innovation Mission (AIM)',
          category: 'Government Scheme',
          description: 'NITI Aayog\'s flagship initiative to promote innovation and entrepreneurship across India through Atal Tinkering Labs, Atal Incubation Centers, and other programs.',
          imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          source: 'NITI Aayog',
          eligibility: [
            'Educational institutions (for Atal Tinkering Labs)',
            'Organizations/institutions (for Atal Incubation Centers)',
            'Established startups looking for scale-up opportunities',
            'Individuals with innovative ideas'
          ],
          applicationProcess: 'Apply through the AIM portal based on specific program requirements and open calls.',
          benefits: 'Financial support, mentorship, infrastructure, industry connections, exposure to innovation ecosystem',
          contactEmail: 'aim@gov.in'
        },
        {
          id: 8,
          title: 'Sequoia Capital Surge',
          category: 'Accelerator',
          description: 'A rapid scale-up program for startups in India and Southeast Asia. Combines $1-2 million of seed capital with company-building workshops, global immersion trips, and support from a community of founders.',
          imageUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          source: 'Sequoia Capital',
          eligibility: [
            'Early-stage startups with product-market fit',
            'Strong founding team',
            'Operating in India or Southeast Asia',
            'Disruptive business model with potential for rapid growth'
          ],
          applicationProcess: 'Applications open twice a year. Apply online through the Surge website.',
          benefits: '$1-2 million seed funding, mentorship from Sequoia partners, global exposure, founder community access',
          contactEmail: 'surge@sequoiacap.com'
        },
        {
          id: 9,
          title: 'Stand-Up India Scheme',
          category: 'Loan Scheme',
          description: 'Facilitates bank loans between ₹10 lakh and ₹1 crore to at least one Scheduled Caste/Scheduled Tribe borrower and one woman borrower per bank branch for setting up greenfield enterprises.',
          imageUrl: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          source: 'Stand-Up India',
          eligibility: [
            'SC/ST and/or women entrepreneurs',
            'Enterprise must be a greenfield project',
            'In manufacturing, services, or trading sector',
            'Project cost between ₹10 lakh and ₹1 crore'
          ],
          applicationProcess: 'Apply online through the Stand-Up India portal or visit any bank branch.',
          benefits: 'Composite loan for meeting capital expenditure and working capital requirements, lower interest rates, minimal margin money',
          contactEmail: 'help@standupmitra.in'
        },
        {
          id: 10,
          title: '91springboard Coworking & Incubation',
          category: 'Incubator',
          description: 'A vibrant coworking community that provides workspace, mentorship, networking opportunities, and access to investors for startups and entrepreneurs.',
          imageUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          source: '91springboard',
          eligibility: [
            'Early to growth stage startups',
            'Freelancers and entrepreneurs',
            'SMEs looking for flexible workspace',
            'Remote teams requiring office infrastructure'
          ],
          applicationProcess: 'Apply online through 91springboard website or visit any of their hubs.',
          benefits: 'Flexible workspace, community events, investor connections, business support services, networking opportunities',
          contactEmail: 'info@91springboard.com'
        },
        {
          id: 11,
          title: 'Digital India STPI Scheme',
          category: 'Government Scheme',
          description: 'Software Technology Parks of India (STPI) offers various benefits to IT/ITeS startups including duty-free imports, tax exemptions, and infrastructure facilities.',
          imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          source: 'STPI',
          eligibility: [
            'IT/ITeS companies and startups',
            'Export-oriented units',
            'Software development businesses',
            'Data processing and BPO/KPO services'
          ],
          applicationProcess: 'Apply for registration through the nearest STPI center or online portal.',
          benefits: 'Duty-free import of capital goods, tax incentives, high-speed data communication, incubation facilities, plug-and-play infrastructure',
          contactEmail: 'info@stpi.in'
        },
        {
          id: 12,
          title: 'Amazon AWS Activate',
          category: 'Accelerator',
          description: 'AWS Activate provides startups with resources to quickly get started on AWS – including credits, training, and support.',
          imageUrl: 'https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          source: 'Amazon Web Services',
          eligibility: [
            'Early-stage startups (less than 10 years old)',
            'Funded or bootstrapped companies',
            'Startups associated with accelerators/incubators',
            'Startups with AWS technical requirements'
          ],
          applicationProcess: 'Apply online through the AWS Activate website.',
          benefits: 'Up to $100,000 in AWS credits, technical support, architectural guidance, training, exclusive offers from AWS partners',
          contactEmail: 'aws-activate@amazon.com'
        },
        {
          id: 13,
          title: 'Patent Fee Concession for Startups',
          category: 'IP Protection',
          description: 'The Indian Patent Office offers an 80% fee reduction for patent applications filed by startups, facilitating intellectual property protection for innovative ideas.',
          imageUrl: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          source: 'Indian Patent Office',
          eligibility: [
            'DPIIT recognized startups',
            'Entity incorporated/registered not prior to 10 years',
            'Annual turnover not exceeding ₹100 crore',
            'Working towards innovation/improvement of products/processes'
          ],
          applicationProcess: 'File patent application online through the IPO website and submit required startup documentation.',
          benefits: '80% reduction in patent filing fees, fast-track examination, free facilitators for patent filing guidance',
          contactEmail: 'patents@nic.in'
        },
        {
          id: 14,
          title: 'CIIE.CO Startup Oasis',
          category: 'Incubator',
          description: 'An incubation center established by CIIE (IIM Ahmedabad) that supports startups in Rajasthan and neighboring regions through incubation, acceleration, and investment programs.',
          imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          source: 'CIIE.CO',
          eligibility: [
            'Early-stage startups in Rajasthan and neighboring regions',
            'Innovative business ideas with market potential',
            'Scalable business models',
            'Committed founding team'
          ],
          applicationProcess: 'Apply online through the Startup Oasis website during open application cycles.',
          benefits: 'Seed funding, mentorship, co-working space, business support services, investor connections',
          contactEmail: 'info@startupoasis.in'
        },
        {
          id: 15,
          title: 'Small Business Innovation Research Initiative (SBIRI)',
          category: 'Funding',
          description: 'A DBT scheme that supports high-risk, early-stage research in biotechnology by providing financial resources to startups and SMEs for technology development and commercialization.',
          imageUrl: 'https://images.unsplash.com/photo-1581093458791-9d10ec90555a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          source: 'Department of Biotechnology',
          eligibility: [
            'Startups and SMEs in biotechnology',
            'Companies with R&D capabilities',
            'Projects with innovative biotechnology applications',
            'Potential for commercial viability'
          ],
          applicationProcess: 'Apply online through the BIRAC website during open calls for proposals.',
          benefits: 'Grant funding up to ₹50 lakh for Phase I (proof of concept) and up to ₹1 crore for Phase II (late stage development)',
          contactEmail: 'sbiri.birac@nic.in'
        }
      ];
      
      
      const foundResource = resourcesData.find(r => r.id === parseInt(id));
      
      if (foundResource) {
        setResource(foundResource);
      } else {
        setError('Resource not found');
      }
    } catch (err) {
      setError('Error loading resource details');
    } finally {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Loading resource details...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-12 bg-red-50 rounded-lg">
              <h2 className="text-2xl font-bold text-red-700 mb-4">{error}</h2>
              <Link to="/resources" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700">
                Return to Resources
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link to="/" className="hover:text-gray-700">Home</Link>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li>
                <Link to="/resources" className="hover:text-gray-700">Resources</Link>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li className="font-medium text-gray-900">
                {resource.title}
              </li>
            </ol>
          </nav>
          
          {/* Resource Header */}
          <div className="bg-white shadow overflow-hidden rounded-lg mb-8">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={resource.imageUrl} 
                  alt={resource.title}
                  className="h-64 w-full object-cover" 
                />
              </div>
              <div className="p-8 md:w-2/3">
                <div className="uppercase tracking-wide text-sm text-primary-600 font-semibold mb-1">
                  {resource.category}
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{resource.title}</h1>
                <p className="text-gray-500 mb-4">Source: {resource.source}</p>
                <p className="text-gray-700 mb-6">{resource.description}</p>
                <div className="flex space-x-4">
                  <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded">
                    Apply Now
                  </button>
                  <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Download Info
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Detailed Information */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Resource Details</h2>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Complete information about this resource.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Eligibility Criteria</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <ul className="list-disc pl-5 space-y-1">
                      {resource.eligibility && resource.eligibility.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Application Process</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {resource.applicationProcess}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Benefits</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {resource.benefits}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Contact</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <a href={`mailto:${resource.contactEmail}`} className="text-primary-600 hover:text-primary-800">
                      {resource.contactEmail}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900">How do I apply for this resource?</h3>
                <p className="mt-2 text-sm text-gray-500">
                  You can apply through the official portal by creating an account and submitting the required documentation.
                </p>
              </div>
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900">What is the selection process?</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Applications are reviewed by a committee based on innovation, market potential, team capabilities, and alignment with program objectives.
                </p>
              </div>
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900">How long does the application process take?</h3>
                <p className="mt-2 text-sm text-gray-500">
                  The typical application review process takes 4-6 weeks from submission to final decision.
                </p>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Ready to move forward?</h2>
            <p className="text-gray-700 mb-4">
              Take the next step to grow your startup with {resource.title}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-6 rounded">
                Apply Now
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-6 border border-gray-400 rounded shadow">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ResourceDetails;
