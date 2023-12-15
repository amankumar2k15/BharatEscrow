import React from 'react'
import bgImg from "../assets/disclaimer/bgImg.jpg"
import bgImg2 from "../assets/disclaimer/bgImg2.jpg"
import Footer from '../components/Footer'

const Disclaimer = () => {
    return (
        <>
            <div className='mt-40 container text-black mx-auto max-w-[800px] font-roboto px-10'>
                <div>
                    <h2 className='text-4xl px-2'>Disclaimer</h2>
                    <p className='text-xl mt-8 px-2 text-gray-500'>Company Name (hereinafter referred to as the “Company” or “Escrowpay”) owns and operates the website www.bharatescrow.com including any sub-domains (hereinafter referred to as the “Website”). The Company acts as a facilitator for collections and payments for the transaction management and escrow facilitation services between the Buyer and Seller and Merchant/ Intermediary (hereinafter referred to as the User, You or Your) for transactions relating to Assets, Goods and Services. Buyer, Seller Merchant, ATS shall have the meaning and definition as contained in the Terms of Services available on the Website.</p>

                    <p className='text-xl mt-8 px-2 text-gray-700'>Company Name (hereinafter referred to as the “Company” or “Escrowpay”) owns and operates the website www.bhThe Company strictly complies with the provisions of the Agreement to Sell ("ATS") and the Release instructions received from the Buyer, Seller, and/or Merchant and makes no attempt to engage in any form of negotiation or transaction management.</p>

                    <p className='text-xl mt-8 px-2 text-gray-500'>It is entirely Your obligation to assess the truthfulness, completeness, and applicability of all comments, suggestions, and other relevant information regarding the Assets, Goods, and Services that You are transacting. The Company is not liable for any information provided or used by the Buyer, Seller, or Merchant, individually or collectively. The company does not support them and will not be held accountable for them. Although every effort is made to ensure that the content is not deceptive, objectionable, inappropriate, or fraudulent, no guarantee is offered as to the truth and reliability of the information on the website.</p>

                    <p className='text-xl mt-8 px-2 text-gray-500'>Nothing on the website should be interpreted as the Company endorsing a sale or purchase of assets, goods, or services, or as a recommendation to do so from another user or merchant, or as an opinion about the legitimacy and veracity of the user(s) or merchant(s). Users are solely responsible and at their own risk when they sell or buy such assets or other goods and services.</p>

                    <p className='text-xl mt-8 px-2 text-gray-500'>The information, products and services included in or available on the Website may include inaccuracies or typographical errors. Changes will be added on a periodical basis from time to time to the information therein. Users are advised to visit the Website on a regular basis and view the necessary changes.</p>

                    <p className='text-xl mt-8 px-2 text-gray-700'>THE WEBSITE MAKES AVAILABLE ON AN "AS IS" BASIS THE CONTENT AND DOCUMENTS UPLOADED/PROVIDED, INCLUDING BUT NOT LIMITED TO DOCUMENTS FOR KYC VERIFICATION AND OTHER TRANSACTION RELATED DOCUMENTS. NO EXPRESS OR IMPLIED WARRANTY OR GUARANTEE IS MADE BY THE COMPANY OR ANY OF ITS AFFILIATES, PARTNERS, VENDORS, SERVICE PROVIDERS, AGENTS OR LICENSORS AS TO THE ACCURACY, COMPLETENESS, REPRESENTATION, NON-INFRINGEMENT OR FITNESS FOR PARTICULAR INFORMATION OF ANY KIND. THE COMPANY DOES NOT INITIALLY OR INDIVIDUAL VERIFY THE DOCUMENTS.<span className='text-xl mt-8 px-2 text-gray-500'> Any documents uploaded by the buyer, seller, or merchant are merely scans of the original documents that are needed, such as the documents for address proof, identity proof, cancelled checks, agreements to sell, release letters, and other deeds and documents, among others. NO DUPLICACY, MISREPRESENTATION, OR FORGERY OF SUCH DOCUMENTS SHALL BE THE FAULT OF THE COMPANY.</span></p>

                    <p className='text-xl mt-8 px-2 text-gray-500'>You use this website at your own risk, responsibility, and peril if you rely on any of the services or information offered there. YOU AGREE THAT THE INFORMATION, PRODUCTS, AND SERVICES PUBLISHED ON THE WEBSITE COULD INCUR DELAYS, INACCURACIES, OMISSIONS, INTERRUPTIONS, AND/OR ISSUES.</p>

                    <p className='text-3xl text-center my-16 sm:px-16 leading-normal  text-black font-bold'>The user shall be solely responsible for making all decisions relating to any Assets, Goods, or Services, opportunity, nature, suitability, choice, or viability.</p>

                    <p className='text-xl mt-8 px-2 text-gray-500'>In the event that the Company has reasonable grounds to believe that a document submitted by the User may be deceptive, unlawful, or otherwise in violation of any law, rule, or regulation, the Company shall be free to decline to honor the document. By signing this document, the Company waives any claims that might develop as a result of or in connection with the examination of the assets, goods, or services that will be transacted on the website.</p>

                    <p className='text-xl mt-8 px-2 text-gray-500'>The services provided by the Company on its website are provided in collaboration with numerous independent service providers such as Partner Banks, Trustee Companies, Payment Gateways, etc. Both the Company and the aforementioned third party disclaim any liability for any service delays, omissions, non-performance, or defaults brought on by the facilitation services and make no representations or assurances regarding the quality, timeliness, or effectiveness of their respective independent services provided by them on or through the Website. Regarding any services obtained by parties through the use of the Website or the facilitation services, the Company and/or the aforementioned third party give no guarantee, warranty, or representation.</p>

                    <p className='text-xl mt-8 px-2 text-gray-500'>Furthermore, neither the Company nor/or the aforementioned third party makes any guarantees that the underlying services will satisfy your needs or be timely, error-free, uninterrupted, or up to standard.</p>

                    <p className='text-xl mt-8 px-2 text-gray-500'>The company makes no guarantees about the continuity or absence of errors in website access or the correction of website flaws. Any payments made to the Company are purely for collection and payment transactions in the Escrow Account that the Company has given, subject to deduction of its escrow fee, which is independent of the transaction's outcome.</p>

                    <div className='flex justify-center items-center  flex-col sm:flex-row  gap-4 my-10 flex-wrap' >
                        <img src={bgImg} className='w-[350px]  h-[220px] sm:h-[250px] rounded-2xl  ' alt='img1' />
                        <img src={bgImg2} className='w-[350px] h-[220px] sm:h-[250px] rounded-2xl ' alt='img2' />
                    </div>

                    <p className='text-xl mt-8 px-2 text-gray-500'>Under no circumstances, including even if we are informed or advised of the possibility beforehand, shall the Company or any of its partners, vendors, service providers, affiliates, agents, or representatives be liable to you or anyone else for any losses, claims, and damages, including but not limited to any liability for consequential, special, incidental, direct or indirect, punitive or exemplary, or other damages of any kind (including lost revenue or profits, loss of business, or loss of dates).</p>

                    <p className='text-xl mt-8 px-2 text-gray-500'>The content on the Website is general in nature and should not be interpreted as advice on any specific subject. Before acting on the information presented here, users are urged to see a professional. The user shall be solely responsible for making all decisions relating to any Assets, Goods, or Services, opportunity, nature, suitability, choice, or viability.</p>

                    <p className='text-xl mt-8 px-2 text-gray-500 mb-10'>The Company is registered, controlled, and operated out of India, and the Company makes no claims that the Assets, Goods, and Services are suitable for use in other regions of the world or will be accessible elsewhere as well. If you access the Website from a location outside of India, you are solely responsible for adhering to all local laws as well as any applicable international agreements and treaties.</p>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Disclaimer