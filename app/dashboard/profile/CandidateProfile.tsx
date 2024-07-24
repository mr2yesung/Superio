import ButtonPrimary from "@/app/_components/button/ButtonPrimary";
import DashboardContentCard from "../DashboardContentCard";
import DashboardFooter from "../DashboardFooter";
import DashboardWrapper from "../DashboardWrapper";
import Image from "next/image";

function CandidateProfile() {
  // use form action
  return (
    <DashboardWrapper title="My Profile">
      <div className="flex flex-col justify-center items-center w-full max-w-full gap-y-[30px]">
        <DashboardContentCard title="Profile Info">
          <form className="md:px-3">
            <div className="w-full flex flex-col md:flex-row items-start md:items-center pb-[30px] mb-[30px] border-b-[1px] border-[#f1f3f7] gap-x-[28px] gap-y-5">
              <div className="relative flex flex-col justify-center items-center">
                <input
                  className="absolute overflow-hidden pointer-events-none -z-10 hidden"
                  type="file"
                  id="logo"
                  name="logo"
                  accept="image/png"
                />
                <label
                  htmlFor="logo"
                  className="flex flex-col justify-center items-center cursor-pointer h-[120px] w-[200px] text-[#1b2032] rounded-[5px] border-2 border-dashed border-[#ced4e1] transition-all duration-300 hover:border-[#021f4a]"
                >
                  <Image
                    src="/images/icons/chevron-up.svg"
                    alt="Browse Logo"
                    width={20}
                    height={20}
                  />
                  <span>Browse Logo</span>
                </label>
              </div>
              {/* add image file the user uploaded */}
              <p className="text-[15px] text-text-secondary leading-6 font-normal">
                Max file size is 1MB, Suitable files are .jpg &amp; .png
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[30px] gap-x-6 mb-[30px]">
              <FormActionElement
                label="First Name"
                htmlFor="firstName"
                placeholder="First Name"
              />
              <FormActionElement
                label="Last Name"
                htmlFor="lastName"
                placeholder="Last Name"
              />
              <FormActionElement
                type="tel"
                label="Phone"
                htmlFor="phone"
                placeholder="0 123 456 7890"
              />
              <FormActionElement
                type="url"
                label="Website"
                htmlFor="website"
                placeholder="www.yourwebsite.com"
              />
              <FormActionElement
                label="Job Title"
                htmlFor="jobTitle"
                placeholder="Software Engineer"
              />
            </div>

            <ButtonPrimary
              type="submit"
              className="max-w-40 text-[15px] leading-5 font-normal py-[15px] px-[35px] rounded-lg mb-5"
            >
              Save
            </ButtonPrimary>
          </form>
        </DashboardContentCard>

        <DashboardContentCard title="Social Network">
          <form className="md:px-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[30px] gap-x-6 mb-[30px]">
              <FormActionElement
                type="url"
                label="Facebook"
                htmlFor="facebook"
                placeholder="www.facebook.com/"
              />
              <FormActionElement
                type="url"
                label="Linkedin"
                htmlFor="linkedin"
                placeholder="www.linkedin.com/in"
              />
            </div>

            <ButtonPrimary
              type="submit"
              className="max-w-40 text-[15px] leading-5 font-normal py-[15px] px-[35px] rounded-lg mb-5"
            >
              Save
            </ButtonPrimary>
          </form>
        </DashboardContentCard>
      </div>

      <DashboardFooter />
    </DashboardWrapper>
  );
}

export default CandidateProfile;

// move to its own component file later
function FormActionElement({
  label,
  htmlFor,
  placeholder,
  type = "text",
}: {
  label: string;
  htmlFor: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="form-element-container">
      <label htmlFor={htmlFor} className="form-element-label">
        {label}
      </label>
      <input
        type={type}
        id={htmlFor}
        name={htmlFor}
        placeholder={placeholder}
        required
        className="form-element-input"
      />
    </div>
  );
}
