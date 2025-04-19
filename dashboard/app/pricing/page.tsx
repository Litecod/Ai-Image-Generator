"use client";

import React, { useEffect, useState } from 'react';
import { IoCheckmarkDoneOutline } from 'react-icons/io5';
import { priceOne, priceTwo, priceThree } from '@/data/price';
import { useContexts } from '@/context/AuthContext';
import axios from 'axios';
import { loadStripe } from "@stripe/stripe-js"

type PricePlan = {
  name: string;
  description: string;
  price: number;
  credit: number;
  image: number;
  corcurrency: number;
  piority: string;
  style: string;
  higher: string;
  period: PricePeriod;
};

type PricePeriod = "weekly" | "monthly" | "yearly";

const Pricing = () => {
  const [priceTag, setPriceTag] = useState<PricePeriod>("weekly");
  const [price, setPrice] = useState<PricePlan[]>([]);
  const [loading, setLoading] = useState(false);
  const { user, backendUrl, token, userId, fetchUser } = useContexts();


  useEffect(() => {
    if (priceTag === "yearly") {
      setPrice(priceThree.map(p => ({ ...p, period: priceTag })));
    } else if (priceTag === "monthly") {
      setPrice(priceTwo.map(p => ({ ...p, period: priceTag })));
    } else {
      setPrice(priceOne.map(p => ({ ...p, period: priceTag })));
    }
  }, [priceTag]);

  const handlePeriodChange = (period: PricePeriod) => {
    setPriceTag(period);
  };

  const addsubscription = async (plan: PricePlan) => {

    const subscriptionData = {
      plan: plan.name,
      price: plan.price,
      period: plan.period,
      credits: plan.credit,
      image: plan.image,
      startDate: new Date(),
      status: 'active',
      isTrial: true
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `${backendUrl}/api/user/subscription`,
        subscriptionData,
        {
          headers: { token },
        }
      );
      if (response.data) {
        console.log(response.data)
      }
      return response.data;
    } catch (error) {
      console.error('Subscription error:', error);
      throw error;
    }
  }

  const handleSubscribe = async (plan: PricePlan) => {
    fetchUser()
    if (!user) {
      alert("Please sign in to subscribe");
      return;
    }

    console.log(plan)

    const subscriptionData = {
      plan: plan.name,
      price: plan.price,
      period: plan.period,
      credits: plan.credit,
      image: plan.image,
      startDate: new Date(),
      status: 'active',
      isTrial: true
    }

    try {
      const response = await axios.post(backendUrl + "/api/user/placeOrderStripe", subscriptionData, { headers: { token } })
      if (response.data.success) {
        const { session_url } = response.data
        window.location.replace(session_url)
      } else {
        console.log(response.data.message)
      }
    } catch (error) {
      console.error('Payment error:', error);
      console.log(userId)
    }
  }
  return (
    <div className='sm:pt-[5rem]  min-h-screen h-screen'>
      <div className="bg-gray-100 rounded-xl h-full px-[0.8rem] md:px-[2rem] lg:px-[3rem] py-[2rem]">
        <div className="max-w-6xl mx-auto">
          <div className="flex p-[0.5rem] bg-[#1d1d1d] rounded-[20rem] gap-[0.3rem] max-w-[18rem] mx-auto justify-between mt-[2rem] duration-3500 scroll-smooth text-white">
            {(["weekly", "monthly", "yearly"] as PricePeriod[]).map((period) => (
              <button
                key={period}
                className={`px-[1rem] py-[0.6rem] rounded-[20rem] capitalize transition-colors ${priceTag === period ? "bg-white text-black" : "hover:bg-gray-700"
                  }`}
                onClick={() => handlePeriodChange(period)}
              >
                {period}
              </button>
            ))}
          </div>

          {/* Pricing cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {price.map((item) => (
              <div
                key={item.name}
                className="flex flex-col gap-5 border border-gray-200 hover:bg-[#1e1e1e] hover:text-white p-6 rounded-xl bg-white text-black transition-all duration-300"
              >
                <h2 className="text-2xl font-bold">{item.name}</h2>
                <p className="text-gray-600 hover:text-gray-300">{item.description}</p>

                <div className="flex items-baseline">
                  <h3 className='text-4xl font-medium'>${item.price}</h3>
                  <div className="flex flex-col ml-2">
                    <span className="text-sm">/month</span>
                    <span className="text-xs">Bill {item.name}</span>
                  </div>
                </div>

                <p className="text-sm">
                  <span className="font-medium">{item.credit}k</span> credit/{item.name}
                </p>

                <hr className="border-gray-200" />

                <button
                  onClick={() => handleSubscribe(item)}
                  disabled={loading}
                  className={`w-full py-3 border-2 border-gray-200 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-colors ${loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                  {loading ? "Processing..." : "Get Started"}
                </button>

                <h4 className="font-medium">What's Included</h4>

                <ul className="flex flex-col gap-3">
                  <IncludedItem text={`Up to ~${item.image} Image Generations/year`} />
                  <IncludedItem text="General Commercial Terms" />
                  <IncludedItem text="Image Generations Visibility: Public" />
                  <IncludedItem text={`${item.corcurrency} concurrent Generations`} />
                  <IncludedItem text={`${item.piority} priority Generations`} />
                  {item.style && <IncludedItem text={item.style} />}
                  {item.higher && <IncludedItem text={item.higher} />}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for included items
const IncludedItem = ({ text }: { text: string }) => (
  <li className="flex gap-2 items-center">
    <IoCheckmarkDoneOutline className="text-green-500" />
    <span className="text-sm">{text}</span>
  </li>
);

export default Pricing;