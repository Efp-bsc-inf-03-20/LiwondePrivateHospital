"use client";

import React, { useState, createContext, useContext } from 'react';
import Header from '@/componets/navbar';
import Footer from '@/componets/footer';
import ScrollToTopButton from '../Scroll/scroll';

const PharmacyContext = createContext(null);

const availablePaymentMethods = [
  { id: 1, name: 'Airtel Money', logo: 'data:image/png;base64,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' },
  { id: 2, name: 'Mpamba', logo: 'data:image/png;base64,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' },
  { id: 3, name: 'Cash', logo: 'https://e7.pngegg.com/pngimages/178/28/png-clipart-computer-icons-money-bag-bank-cash-angle-hand-thumbnail.png' },
  { id: 4, name: 'Medical Schemes', logo: 'data:image/png;base64,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' }
];

export default function Buy() {
  const pharmacyContextValue = useContext(PharmacyContext);
  const [showMessage, setShowMessage] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    setShowMessage(true);
  };

  return (
    <>
      <Header />
      <div className="mx-auto max-w-10xl px-6 lg:px-8">
        <div className="mx-auto max-w-10xl px-6 lg:px-8">
          <div
            className="bg-green-400 w-full h-700 justify-center py-24 sm:py-32"
            style={{
              backgroundImage:
                "url(https://scontent.fblz2-1.fna.fbcdn.net/v/t39.30808-6/440877620_847659734047454_3275822707332724965_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH8Wf6fX051KIjILgsVt7AhU8UDGX2VykxTxQMZfZXKTAw79vIGonhQHjiH8487dVHLApYXi3uHckqqX2wjHTv1&_nc_ohc=e2sFbnqx5hsQ7kNvgHsRpO-&_nc_zt=23&_nc_ht=scontent.fblz2-1.fna&oh=00_AYC7_U6qJZhtEcTFjxHBpR1Rh7DUnFxDyi4jqdy6UCkgKg&oe=66557E77)"
            }}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-4xl sm:text-center">
                <h1 className="mt-60 text-3xl font-bold tracking-tight text-black-900 sm:text-4xl">
                  Liwonde Private Hospital Pharmacy Services
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
              Liwonde Private Hospital History
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Liwonde Private Hospital (LPH) has a rich history of providing Scarcity drugs to its community. 
              Founded in 1999, LPH has been a cornerstone in the medical field, striving for excellence and compassion in patient care.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-green-900">
                Buy Medicines
              </h3>
              <div className="mt-6">
                <input
                  type="text"
                  placeholder="Search for available drugs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-80 px-4 py-2 text-lg border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                />
              </div>
              <div className="mt-4 md:mt-6">
                <button
                  onClick={handleSearch}
                  className="w-full md:w-auto px-4 py-2 bg-green-600 text-white rounded-md shadow-sm text-sm font-semibold focus:outline-none hover:bg-orange-500"
                >
                  Search
                </button>
              </div>
              {showMessage && (
                <p className="mt-4 text-sm text-gray-700">Showing results for: {searchQuery}</p>
              )}
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                  Payment Methods
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {availablePaymentMethods.map((method) => (
                  <li key={method.id} className="flex gap-x-3 items-center">
                    <img src={method.logo} alt={method.name} className="h-6 w-6" />
                    <span>{method.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">
                    We Treat, God Heals
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      MWK00
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      kwacha
                    </span>
                  </p>
                  <a
                    href="/BuyNow"
                    className="mt-10 block w-full rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Buy Now
                  </a>
                  <p className="mt-6 text-xs leading-5 border-gray-300 text-gray-600">
                    Note: Collection is at the LPH Pharmacy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}
