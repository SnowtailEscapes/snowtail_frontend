import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <div className="rounded-md pt-12 min-h-max mb-5 items-center flex flex-col">
        <div className="flex flex-col md:p-10 p-5 items-center gap-4">
          <h6 className="text-3xl md:text-5xl text-center border-b-4 w-fit text-nowrap mb-4">
            Terms and conditions
          </h6>
          <p className="text-sm w-full md:w-4/5">
            This web page represents a legal document that serves as the terms
            of use for our website ("Terms of Use"),{" "}
            <Link to="https://snowtailescapes.com">
              www.snowtailescapes.com
            </Link>{" "}
            or Snowtail Escapes ("Snowtail Escapes").
          </p>
        </div>

        <div className="flex flex-col bg-green-100 md:p-10 p-5 items-center gap-4">
          <p className="text-sm w-full md:w-4/5">
            Capitalized terms, unless otherwise defined, have the meaning
            specified within the Definitions section below. These Terms of Use,
            and other posted guidelines within our Website, (collectively "Legal
            Terms"), constitute the entire and only agreement between you and
            Snowtail Escapes, and supersede all other agreements,
            representations, warranties, and understandings with respect to our
            Website and the subject matter contained herein.
            <br />
            <br />
            We may amend our Legal Terms at any time without specific notice to
            you. The latest copies of our Legal Terms will be posted on our
            Website, and you should review all Legal Terms prior to using our
            Website. After any revisions to our Legal Terms are posted, you
            agree to be bound to any such changes to them. Therefore, it is
            important for you to periodically review our Legal Terms to make
            sure you still agree to them.
            <br />
            <br />
            By using our Website, you agree to fully comply with and be bound by
            our Legal Terms. Please review them carefully. If you do not accept
            our Legal Terms, do not access and use our Website.
          </p>
        </div>

        <div className="flex flex-col md:p-10 p-5 items-center gap-4">
          <h6 className="text-2xl md:text-3xl text-center border-b-4  w-fit text-nowrap">
            Definitions
          </h6>
          <ul className="text-sm w-full md:w-4/5">
            <li className="list-disc">
              <span className="text-green-400">us</span> or{" "}
              <span className="text-green-400">we</span> or{" "}
              <span className="text-green-400">our</span> refers to Snowtail
              Escapes, the owner of the Website.
            </li>
            <li className="list-disc">
              A <span className="text-green-400">Member</span> is an individual
              that has registered with our Website to use its features.
            </li>
            <li className="list-disc">
              A <span className="text-green-400">Supplier</span> is a Member
              that is a business offering travel-related goods and services.
            </li>
            <li className="list-disc">
              A <span className="text-green-400">Customer</span> is a Member who
              purchases goods/services from Suppliers.
            </li>
            <li className="list-disc">
              <span className="text-green-400">User</span> refers to either a
              Visitor or a Member.
            </li>
            <li className="list-disc">
              <span className="text-green-400">Visitor</span> is someone who
              merely browses our Website.
            </li>
            <li className="list-disc">
              <span className="text-green-400">Content</span> refers to all
              text, information, graphics, audio, video, and data offered
              through our Website.
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:p-10 p-5 bg-green-100 items-center gap-4">
          Limited License
          <p className="text-sm w-full md:w-4/5">
            Snowtail Escapes grants you a non-exclusive, non-transferable,
            revocable license to access and use our Website strictly in
            accordance with our Legal Terms. Your use of our Website is solely
            for the purposes as provided herein.
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
            Legal Compliance
          </h6>
          <p className="text-sm w-full md:w-4/5">
            You agree to comply with all applicable domestic and international
            laws, statutes, ordinances, and regulations regarding your use of
            our Website. Snowtail Escapes reserves the right to investigate
            complaints or reported violations of our Legal Terms and to take any
            action we deem appropriate, including but not limited to canceling
            your Member account, reporting any suspected unlawful activity to
            law enforcement officials, and disclosing any necessary information.
          </p>
        </div>

        <div className="flex flex-col md:p-10 p-5 items-center gap-4">
          <h6 className="text-2xl md:text-3xl text-center border-b-4 w-fit border-white text-nowrap">
            Eligibility and Registration for Membership
          </h6>
          <p className="text-sm w-full md:w-4/5">
            To use our Website, you must register and become a Member.
            Membership is not transferable or assignable and is void where
            prohibited. You certify that you are at least 18 years old. If you
            are between the ages of 13 and 18, you certify that you have your
            parent's permission to join our Website. You may not access this
            website if you are under the age of 13.
          </p>
        </div>

        <div className="flex flex-col md:p-10 p-5 items-center gap-4  bg-green-100">
          <h6 className="text-2xl md:text-3xl text-center border-b-4 w-fit border-white text-nowrap">
            Member Content
          </h6>
          <p className="text-sm w-full md:w-4/5">
            As a Member, any information you upload to our Website is considered
            Member Content. By uploading Member Content, you warrant that you
            have legal rights to transmit, display, and use the content. You are
            solely responsible for ensuring that you do not infringe the rights
            of any third parties.
          </p>
        </div>

        <div className="flex flex-col md:p-10 p-5 items-center gap-4">
          <h6 className="text-2xl md:text-3xl text-center border-b-4 w-fit border-white text-nowrap">
            Digital Millennium Copyright Act Compliance
          </h6>
          <p className="text-sm w-full md:w-4/5">
            If you believe that your work has been copied on our Website in a
            way that constitutes copyright infringement, please provide the
            following information:
            <br />
            <ul>
              <li className="list-disc">
                An electronic or physical signature of the person authorized to
                act on behalf of the owner of the copyright interest.
              </li>
              <li className="list-disc">
                A description of the copyrighted work that you claim has been
                infringed.
              </li>
              <li className="list-disc">
                A description of where the material that you claim is infringing
                is located on the site.
              </li>
              <li className="list-disc">
                Your address, telephone number, and email address.
              </li>
              <li className="list-disc">
                A statement by you that you have a good faith belief that the
                disputed use is not authorized by the copyright owner, its
                agent, or the law.
              </li>
              <li className="list-disc">
                A statement by you, made under penalty of perjury, that the
                above information in your notification is accurate and that you
                are the copyright owner or authorized to act on the copyright
                owner's behalf.
              </li>
            </ul>
          </p>
        </div>

        <div className="flex flex-col md:p-10 p-5 items-center gap-4  bg-green-100">
          <h6 className="text-2xl md:text-3xl text-center border-b-4 w-fit border-white text-nowrap">
            {" "}
            Snowtail Escapes can be contacted at
          </h6>
          <p className="text-sm w-full md:w-4/5">
            By Mail: Snowtail Escapes
            <br />
            Triveni Nagar, Jaipur, Rajasthan 302018
            <br />
            By E-mail: info@snowtailescapes.com
          </p>
        </div>

        <div className="flex flex-col md:p-10 p-5 items-center gap-4">
          <h6 className="text-2xl md:text-3xl text-center border-b-4 w-fit border-white text-nowrap">
            Member Conduct
          </h6>
          <p className="text-sm w-full md:w-4/5">
            As a Member, you agree not to use our Website to:
            <br />
            <ul>
              <li className="list-disc">
                Violate any local, state, federal, or international laws.
              </li>
              <li className="list-disc">
                nfringe on any patent, trademark, trade secret, copyright, or
                other proprietary rights of any party.
              </li>
              <li className="list-disc">
                Harm, threaten, defame, promote violence or illegal activities,
                or otherwise be vulgar, obscene, abusive, harassing, tortious,
                libelous, invasive of another's privacy, hateful, or racially,
                ethnically, or otherwise objectionable.
              </li>
            </ul>
          </p>
        </div>

        <div className="flex flex-col md:p-10 p-5 items-center gap-4  bg-green-100">
          <h6 className="text-2xl md:text-3xl text-center border-b-4 w-fit border-white text-nowrap">
            Intellectual Property
          </h6>
          <p className="text-sm w-full md:w-4/5">
            Our Website and its content are protected under international
            copyrights. You do not receive any ownership rights in our Content
            or Website by using our Website.
          </p>
        </div>

        <div className="flex flex-col md:p-10 p-5 items-center gap-4 ">
          <h6 className="text-2xl md:text-3xl text-center border-b-4 w-fit border-white text-nowrap">
            Links to Other Websites
          </h6>
          <p className="text-sm w-full md:w-4/5">
            Our Website may contain links to third-party websites. These links
            are provided solely as a convenience to you. Snowtail Escapes is not
            responsible for the content or practices of these third-party
            websites.
          </p>
        </div>

        <div className="flex flex-col md:p-10 p-5 items-center gap-4 bg-green-100">
          <h6 className="text-2xl md:text-3xl text-center border-b-4 w-fit border-white text-nowrap">
            Warranty Disclaimer
          </h6>
          <p className="text-sm w-full md:w-4/5">
            Our Website is provided "as-is," "as available," with "all faults,"
            and all warranties, express or implied, are disclaimed. Snowtail
            Escapes does not warrant that our Website is accurate, complete,
            reliable, current, or error-free.
          </p>
        </div>

        <div className="flex flex-col md:p-10 p-5 items-center gap-4">
          <h6 className="text-2xl md:text-3xl text-center border-b-4 w-fit border-white text-nowrap">
            Limitation of Liability
          </h6>
          <p className="text-sm w-full md:w-4/5">
            Snowtail Escapes and its affiliates shall not be liable for any
            loss, injury, claim, liability, or damage of any kind resulting in
            any way from:
            <br />
            <ul>
              <li className="list-disc">
                Any errors in or omissions from our Website.
              </li>
              <li className="list-disc">
                The unavailability or interruption of our Website.
              </li>
              <li className="list-disc">Your use of our Website.</li>
              <li className="list-disc">
                Any delay or failure in performance of our Website.
              </li>
            </ul>
          </p>
        </div>

        <div className="flex flex-col md:p-10 p-5 items-center gap-4 bg-green-100">
          <h6 className="text-2xl md:text-3xl text-center border-b-4 w-fit border-white text-nowrap">
            Fees
          </h6>
          <p className="text-sm w-full md:w-4/5">
            If at some point you pay to use our Website, you agree to pay the
            fees at our then-current prices, provide true and complete credit
            information, and honor your payment method. All purchases and
            reservations made on Snowtail Escapes are final and non-refundable.
          </p>
        </div>

        <div className="flex flex-col md:p-10 p-5 items-center gap-4">
          <h6 className="text-2xl md:text-3xl text-center border-b-4 w-fit border-white text-nowrap">
            Indemnification
          </h6>
          <p className="text-sm w-full md:w-4/5">
            You agree to indemnify, defend, and hold harmless Snowtail Escapes
            and our partners, agents, officers, directors, employees,
            subcontractors, successors, assigns, third-party suppliers, and
            affiliates from any liability, loss, claim, and expense, including
            reasonable attorney's fees, related to your violation of our Legal
            Terms or use of our Website.
          </p>
        </div>

        <div className="flex flex-col md:p-10 p-5 items-center gap-4 bg-green-100">
          <h6 className="text-2xl md:text-3xl text-center border-b-4 w-fit border-white text-nowrap">
            Termination of Your Account
          </h6>
          <p className="text-sm w-full md:w-4/5">
            Snowtail Escapes reserves the right to terminate your account
            without notice if you violate our Legal Terms. You may also
            voluntarily terminate your account. Upon termination, you will lose
            access to our Website and any Member Content you have provided.
          </p>
        </div>

        <div className="flex flex-col md:p-10 p-5 items-center gap-4">
          <h6 className="text-2xl md:text-3xl text-center border-b-4 w-fit border-white text-nowrap">
            General Terms
          </h6>
          <p className="text-sm w-full md:w-4/5">
            The terms shall be governed by and construed in accordance with the
            laws of India, and the jurisdiction will be based out of Jaipur,
            Rajasthan, India. The failure to enforce any provision of our Legal
            Terms shall not be deemed a waiver of such provision nor of the
            right to enforce such provision. The rights of Snowtail Escapes
            under our Legal Terms shall survive the termination of our Legal
            Terms.
          </p>
        </div>

        <div className="flex flex-col md:p-10 p-5 items-center gap-4">
          <p className="text-sm w-full md:w-4/5">
            For more details, please contact us at: Snowtail Escapes
            <br /> Triveni Nagar, Jaipur, Rajasthan 302018 <br />
            E-mail: info@snowtailescapes.com
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
