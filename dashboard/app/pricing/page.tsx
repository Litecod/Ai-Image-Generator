"use client";

import React, { useEffect, useState } from 'react';
import { IoCheckmarkDoneOutline } from 'react-icons/io5';
import { priceOne, priceTwo, priceThree } from '@/data/price';
import { useContexts } from '@/context/AuthContext';
import axios from 'axios';
import { loadStripe } from "@stripe/stripe-js"
import { toast } from 'sonner';

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
  const { user, token, backendUrl, userId, fetchUser, imageGen, setPlan } = useContexts();


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

  // const addsubscription = async (plan: PricePlan) => {

  //   const subscriptionData = {
  //     plan: plan.name,
  //     price: plan.price,
  //     period: plan.period,
  //     credits: plan.credit,
  //     image: plan.image,
  //     startDate: new Date(),
  //     status: 'active',
  //     isTrial: true
  //   }

  //   try {
  //     const token = localStorage.getItem('token');
  //     const response = await axios.post(
  //       `${backendUrl}/api/user/subscription`,
  //       subscriptionData,
  //       {
  //         headers: { token },
  //       }
  //     );
  //     if (response.data) {
  //       console.log(response.data)
  //     }
  //     return response.data;
  //   } catch (error) {
  //     toast.error('Subscription error:');
  //     console.log(error)
  //     throw error;
  //   }
  // }

  const handleSubscribe = async (plan: PricePlan) => {
    fetchUser()
    if (!user) {
      toast.error("Please sign in to subscribe");
      return;
    }
    setPlan(plan)

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
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error('Payment error:');
      console.log(error)
    }
  }
  return (
    <div className='sm:pt-[4.5rem]  heig '>
      <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-black border border-gray-900  rounded-xl h-full px-[0.8rem] md:px-[2rem] lg:px-[3rem] py-[5rem] sm:py-[1rem] ">
        <div className="max-w-6xl mx-auto">
          <div className="flex p-[0.5rem] bg-gray-900 border border-gray-800 rounded-[20rem] gap-[0.3rem] max-w-[18rem] mx-auto justify-between mt-[2rem] duration-3500 scroll-smooth text-white">
            {/* {(["weekly", "monthly", "yearly"] as PricePeriod[]).map((period) => (
              <button
                key={period}
                className={`px-[1rem] py-[0.6rem] rounded-[20rem] capitalize transition-colors ${priceTag === period ? "bg-gray-200 text-black" : "hover:bg-gray-700"
                  }`}
                onClick={() => handlePeriodChange(period)}
              >
                {period}
              </button>
            ))} */}

            <button
              className={`px-[1rem] py-[0.6rem] rounded-[20rem] capitalize transition-colors ${priceTag === "weekly" ? "bg-gray-200 text-black" : "hover:bg-gray-700"
                }`}
              onClick={() => handlePeriodChange("weekly")}
            >
              weekly
            </button>
            <button
              className={`px-[1rem] py-[0.6rem] rounded-[20rem] capitalize transition-colors ${priceTag === "monthly" ? "bg-gray-200 text-black" : "hover:bg-gray-700"
                }`}
              onClick={() => handlePeriodChange("monthly")}
            >
              monthly
            </button>
            <button
              className={`px-[1rem] py-[0.6rem] rounded-[20rem] capitalize transition-colors ${priceTag === "yearly" ? "bg-gray-200 text-black" : "hover:bg-gray-700"
                }`}
              onClick={() => handlePeriodChange("yearly")}
            >
              yearly
            </button>
          </div>

          {/* Pricing cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {price.map((item) => (
              <div
                key={item.name}
                className="flex flex-col gap-5 border border-gray-800 bg-gray-900  p-6 rounded-xl text-gray-100 transition-all duration-300"
              >
                <h2 className="text-2xl font-bold">{item.name}</h2>
                <p className="">{item.description}</p>

                <div className="flex items-baseline">
                  <h3 className='text-4xl font-medium'>${item.price}</h3>
                  <div className="flex flex-col ml-2">
                    <span className="text-sm">/month</span>
                    <span className="text-xs">Bill {item.name}</span>
                  </div>
                </div>

                <p className="text-sm">
                  <span className="font-medium">{item.credit} </span> credit/{item.name}
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
                  <div className='hidden'><IncludedItem text={`Up to ~${item.image} Image Generations/year`} /></div>
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