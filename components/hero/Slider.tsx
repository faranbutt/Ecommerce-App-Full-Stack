'use client'
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';

export default function NextJsCarousel(){ 
    
        return (
            <div className='px-10 py-3'>
              <Carousel>
                  <div>
                    
                      <img src="/product1.png" alt="image1"/>
                      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Brushed Raglan Sweatshirt</h4>
                       <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-gray-500">$195</h4>
                    
                  </div>
                  <div>
                      <img src="/product2.png" alt="image2" />
                      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Cameryn Sash Tie Dress</h4>
                       <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-gray-500">$545</h4>
                  </div>
                  <div>
                      <img src="/product3.png" alt="image3"/>
                      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Flex Sweatshirt</h4>
                       <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-gray-500">$175</h4>
                  </div>
              </Carousel>
            </div>
        );
    }