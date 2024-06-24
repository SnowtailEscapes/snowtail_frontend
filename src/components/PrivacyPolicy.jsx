import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="rounded-md pt-12 min-h-max mb-5 items-center flex flex-col">
        <div className="flex flex-col md:p-10 p-5 items-center gap-4">
          <h6 className="text-3xl md:text-5xl text-center border-b-4 w-fit text-nowrap">
            Privacy Policy
          </h6>
          <p className="text-sm w-full md:w-4/5">
            This privacy policy is for{" "}
            <Link to="https://snowtailescapes.com" className="text-blue-500">www.snowtailescapes.com</Link>{" "}
            and is served by Snowtail Escapes. It governs the privacy of its
            users who choose to use it.
          </p>
        </div>

        <div className="flex flex-col bg-green-100 md:p-10 p-5 items-center gap-4">
          <h6 className="text-2xl md:text-3xl text-center border-b-4 w-fit border-white text-nowrap">
            The Policy
          </h6>
          <p className="text-sm w-full md:w-4/5">
            This policy outlines the various areas where user privacy is
            concerned and details the obligations & requirements of the users,
            the website, and website owners. Furthermore, the way this website
            processes, stores, and protects user data and information will also
            be detailed within this policy.
          </p>
        </div>

        <div className="flex flex-col md:p-10 p-5 items-center gap-4">
          <h6 className="text-2xl md:text-3xl text-center border-b-4  w-fit text-nowrap">
            The Website
          </h6>
          <p className="text-sm w-full md:w-4/5">
            This website and its owners take a proactive approach to user
            privacy and ensure the necessary steps are taken to protect the
            privacy of its users throughout their visiting experience. This
            website complies with all applicable national laws and requirements
            for user privacy.
          </p>
        </div>

        <div className="flex flex-col md:p-10 p-5 bg-green-100 items-center gap-4">
          <h6 className="text-2xl md:text-3xl text-center border-b-4 w-fit border-white text-nowrap">
            Use of Cookies
          </h6>
          <p className="text-sm w-full md:w-4/5">
            This website uses cookies to enhance the user experience. Where
            applicable, this website uses a cookie control system allowing the
            user on their first visit to allow or disallow the use of cookies on
            their computer/device. This complies with legislation requirements
            for websites to obtain explicit consent from users before leaving
            behind or reading files such as cookies on a users computer/device.
            <br />
            <br />
            Cookies are small files saved to the users computer hard drive that
            track, save, and store information about the users interactions and
            usage of the website. This allows the website to provide users with
            a tailored experience.
          </p>
        </div>

        <div className="flex flex-col md:p-10 p-5 items-center gap-4">
          <h6 className="text-2xl md:text-3xl text-center border-b-4 w-fit border-white text-nowrap">
            Tracking Software
          </h6>
          <p className="text-sm w-full md:w-4/5">
            This website uses tracking software to monitor its visitors to
            better understand how they use it. This software is provided by
            Google Analytics which uses cookies to track visitor usage. The
            software will save a cookie to your computer hard drive to track and
            monitor your engagement and usage of the website but will not store,
            save, or collect personal information. You can read Google's privacy
            policy here: Google Privacy Policy.
          </p>
        </div>

        <div className="flex flex-col md:p-10 p-5 items-center gap-4 bg-green-100">
          <h6 className="text-2xl md:text-3xl text-center border-b-4 w-fit border-white text-nowrap">
            Email Newsletter
          </h6>
          <p className="text-sm w-full md:w-4/5">
            This website operates an email newsletter program, used to inform
            subscribers about products and services supplied by this website.
            Users can subscribe through an online automated process at their
            discretion. Some subscriptions may be manually processed through
            prior written agreement with the user.
          </p>
        </div>

        <div className="flex flex-col md:p-10 p-5 items-center gap-4">
          <h6 className="text-2xl md:text-3xl text-center border-b-4 w-fit border-white text-nowrap">
            Adverts and Sponsored Links
          </h6>
          <p className="text-sm w-full md:w-4/5">
            This website may contain sponsored links and adverts. These will
            typically be served through our advertising partners, to whom may
            have detailed privacy policies relating directly to the adverts they
            serve. Clicking on any such adverts will send you to the advertisers
            website through a referral program which may use cookies and will
            track the number of referrals sent from this website. Users should
            note they click on sponsored external links at their own risk and
            this website and its owners cannot be held liable for any damages or
            implications caused by visiting any external links mentioned.
          </p>
        </div>

        <div className="flex flex-col md:p-10 p-5 items-center gap-4  bg-green-100">
          <h6 className="text-2xl md:text-3xl text-center border-b-4 w-fit border-white text-nowrap">
            Social Media Platforms
          </h6>
          <p className="text-sm w-full md:w-4/5">
            Communication, engagement, and actions taken through external social
            media platforms that this website and its owners participate on are
            custom to the terms and conditions as well as the privacy policies
            held with each social media platform respectively. Users are advised
            to use social media platforms wisely and communicate/engage upon
            them with due care and caution in regard to their own privacy and
            personal details. This website nor its owners will ever ask for
            personal or sensitive information through social media platforms and
            encourage users wishing to discuss sensitive details to contact them
            through primary communication channels such as by telephone or
            email.
          </p>
        </div>

        <div className="flex flex-col md:p-10 p-5 items-center gap-4">
          <h6 className="text-2xl md:text-3xl text-center border-b-4 w-fit border-white text-nowrap">
            Security
          </h6>
          <p className="text-sm w-full md:w-4/5">
            We ensure that appropriate technical and organizational security
            measures are taken against unlawful or unauthorized access or use of
            your personal data, as well as against accidental loss or damage to
            the integrity of your personal data.
          </p>
        </div>

        <div className="flex flex-col md:p-10 p-5 items-center gap-4  bg-green-100">
          <h6 className="text-2xl md:text-3xl text-center border-b-4 w-fit border-white text-nowrap">
            Changes to This Privacy Policy
          </h6>
          <p className="text-sm w-full md:w-4/5">
            Snowtail Escapes may update this Privacy Policy from time to time.
            Any changes will be posted on this page and, where appropriate,
            notified to you by e-mail. Please check back frequently to see any
            updates or changes to our Privacy Policy.
          </p>
        </div>

        <div className="flex flex-col md:p-10 p-5 items-center gap-4 w-full text-center">
          <p className="text-sm w-full">
            For any questions about this Privacy Policy, please contact us at
            <Link to="info@snowtailescapes.com" className='text-blue-500'>
            {"  "}info@snowtailescapes.com
            </Link>
            .
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
