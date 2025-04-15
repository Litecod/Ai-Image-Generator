"use client";

import React, { useEffect, useState } from 'react';
import { IoCheckmarkDoneOutline } from 'react-icons/io5';
import { priceOne, priceTwo, priceThree } from '@/data/price';
import { db } from '@/firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { toast } from 'react-hot-toast';
import { useContexts } from '@/context/AuthContext';

// Enhanced Type Definitions
type BillingPeriod = "weekly" | "monthly" | "yearly";
type SubscriptionStatus = "pending" | "active" | "cancelled";

interface PricePlan {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  discountedPrice?: number;
  credit: number;
  imageGenerations: number;
  concurrentJobs: number;
  priority: string;
  styleAccess?: string;
  premiumFeatures?: string;
  billingPeriod: BillingPeriod;
  isPopular?: boolean;
}

interface SubscriptionData {
  userId: string;
  planId: string;
  planName: string;
  pricePaid: number;
  billingPeriod: BillingPeriod;
  creditsAllocated: number;
  status: SubscriptionStatus;
  startDate: Date;
  renewalDate?: Date;
  paymentMethod?: string;
}

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");
  const [plans, setPlans] = useState<PricePlan[]>([]);
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({});
  const { user } = useContexts();

  // Transform and enhance pricing data
  useEffect(() => {
    const transformPlans = (basePlans: any[], period: BillingPeriod): PricePlan[] => {
      return basePlans.map(plan => ({
        id: `${period}-${plan.name.toLowerCase().replace(/\s+/g, '-')}`,
        ...plan,
        billingPeriod: period,
        discountedPrice: period === "yearly" ? plan.price * 0.8 : undefined,
        imageGenerations: plan.image,
        concurrentJobs: plan.corcurrency,
        priority: plan.piority,
        styleAccess: plan.style,
        premiumFeatures: plan.higher,
        isPopular: plan.name === "Pro"
      }));
    };

    if (billingPeriod === "yearly") {
      setPlans(transformPlans(priceThree, billingPeriod));
    } else if (billingPeriod === "monthly") {
      setPlans(transformPlans(priceTwo, billingPeriod));
    } else {
      setPlans(transformPlans(priceOne, billingPeriod));
    }
  }, [billingPeriod]);

  const handleSubscribe = async (plan: PricePlan) => {
    if (!user) {
      toast.error("Please sign in to subscribe");
      return;
    }

    setIsLoading(prev => ({ ...prev, [plan.id]: true }));

    try {
      const subscriptionData: SubscriptionData = {
        userId: user.uid,
        planId: plan.id,
        planName: plan.name,
        pricePaid: plan.discountedPrice || plan.basePrice,
        billingPeriod: plan.billingPeriod,
        creditsAllocated: plan.credit,
        status: "pending",
        startDate: new Date(),
        renewalDate: calculateRenewalDate(plan.billingPeriod)
      };

      await addDoc(collection(db, "subscriptions"), subscriptionData);
      
      toast.success(`Subscribed to ${plan.name} plan successfully!`);
      // Redirect to payment or dashboard
    } catch (error) {
      console.error("Subscription error:", error);
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsLoading(prev => ({ ...prev, [plan.id]: false }));
    }
  };

  const calculateRenewalDate = (period: BillingPeriod): Date => {
    const date = new Date();
    switch (period) {
      case "weekly":
        date.setDate(date.getDate() + 7);
        break;
      case "monthly":
        date.setMonth(date.getMonth() + 1);
        break;
      case "yearly":
        date.setFullYear(date.getFullYear() + 1);
        break;
    }
    return date;
  };

  return (
    <div className="px-4 md:px-8 lg:px-12 py-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Billing Period Selector */}
        <div className="flex p-1 bg-gray-900 rounded-full gap-1 max-w-xs mx-auto mt-8 text-white">
          {(["weekly", "monthly", "yearly"] as BillingPeriod[]).map((period) => (
            <button
              key={period}
              className={`px-4 py-2 rounded-full capitalize transition-all flex-1 text-sm ${
                billingPeriod === period 
                  ? "bg-white text-gray-900 font-medium" 
                  : "hover:bg-gray-700"
              }`}
              onClick={() => setBillingPeriod(period)}
            >
              {period}
            </button>
          ))}
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative border rounded-xl p-6 transition-all ${
                plan.isPopular 
                  ? "border-2 border-blue-500 shadow-lg bg-white" 
                  : "border-gray-200 bg-white hover:shadow-md"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-6 -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  POPULAR
                </div>
              )}

              <div className="flex flex-col gap-6">
                {/* Plan Header */}
                <div>
                  <h2 className="text-2xl font-bold">{plan.name}</h2>
                  <p className="text-gray-600 mt-1">{plan.description}</p>
                </div>

                {/* Price Display */}
                <div>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold">
                      ${plan.discountedPrice || plan.basePrice}
                    </span>
                    <span className="text-gray-500 mb-1">/month</span>
                  </div>
                  {plan.discountedPrice && (
                    <div className="flex gap-2 items-center mt-1">
                      <span className="line-through text-gray-400">
                        ${plan.basePrice}
                      </span>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded">
                        Save {Math.round((1 - plan.discountedPrice/plan.basePrice) * 100)}%
                      </span>
                    </div>
                  )}
                  <p className="text-sm text-gray-500 mt-2">
                    Billed {billingPeriod === "yearly" ? "annually" : billingPeriod + "ly"}
                  </p>
                </div>

                {/* Credits */}
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm">
                    <span className="font-medium">{plan.credit}k</span> credits included
                  </p>
                </div>

                {/* Subscribe Button */}
                <button
                  onClick={() => handleSubscribe(plan)}
                  disabled={isLoading[plan.id]}
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    plan.isPopular
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-900 hover:bg-gray-800 text-white"
                  } ${
                    isLoading[plan.id] ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading[plan.id] ? (
                    <span className="inline-flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Get Started"
                  )}
                </button>

                {/* Features List */}
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">What's included:</h4>
                  <ul className="space-y-3">
                    <FeatureItem text={`Up to ${plan.imageGenerations} image generations`} />
                    <FeatureItem text={`${plan.concurrentJobs} concurrent jobs`} />
                    <FeatureItem text={`${plan.priority} priority queue`} />
                    {plan.styleAccess && <FeatureItem text={plan.styleAccess} />}
                    {plan.premiumFeatures && <FeatureItem text={plan.premiumFeatures} />}
                    <FeatureItem text="Commercial usage rights" />
                    <FeatureItem text="Public image visibility" />
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-2">
    <IoCheckmarkDoneOutline className="text-green-500 mt-0.5 flex-shrink-0" />
    <span className="text-sm text-gray-700">{text}</span>
  </li>
);

export default Pricing;