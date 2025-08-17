"use client";
import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

interface ClientWebsiteCardProps {
  title: string;
  description: string;
  imageUrl: string;
  siteUrl: string;
  category?: string;
  year?: string;
}

export const ClientWebsiteCard = ({
  title,
  description,
  imageUrl,
  siteUrl,
  category = "Website",
  year = "2024"
}: ClientWebsiteCardProps) => {
  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-size='14'%3E${title}%3C/text%3E%3C/svg%3E";
          }}
        />
        
        {/* Visit button overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors"
          >
            Visit Site
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-sm text-gray-500 font-medium">{category}</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span className="text-sm text-gray-500">{year}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
          
          <a
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full transition-all duration-300 hover:bg-black hover:text-white group-hover:rotate-45"
          >
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

// Demo Component
export const ClientWebsiteCardDemo = () => {
  const projects = [
    {
      title: "Lam3a",
      description: "Modern e-commerce platform with seamless shopping experience",
      imageUrl: "https://17mm2glo1t.ufs.sh/f/rQix7xjgXapPiIRbnq7D1WTxLN2HfeKURACQBZkvm8oEMp0X",
      siteUrl: "https://lam3a.sa/",
      category: "E-commerce",
      year: "2024"
    },
    {
      title: "Etjahh",
      description: "Modern Real Estate Platform we partnered with",
      imageUrl: "https://17mm2glo1t.ufs.sh/f/rQix7xjgXapPi33JkE7D1WTxLN2HfeKURACQBZkvm8oEMp0X",
      siteUrl: "https://etjahh.com/",
      category: "Real Estate",
      year: "2024"
    },
    {
      title: "Real Estate",
      description: "Modern Real Estate Platform ui ux ready to use",
      imageUrl: "https://17mm2glo1t.ufs.sh/f/rQix7xjgXapPBVVeBYlbqAPQIWpZEdXj2ywKOkus9YitgFNm",
      siteUrl: "https://real-estate-up.netlify.app/",
      category: "Real Estate",
      year: "2024"
    }
  ];

  return (
    <div className=" -50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Clients Work</h1>
          <p className="text-xl text-gray-600"> Explore our successful client implementations and results</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ClientWebsiteCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};