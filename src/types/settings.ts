export interface SiteSettingData {
  id?: string;
  // Admin Settings
  title?: string;
  footer?: string;
  referWallet?: string;
  logo?: string;
  lightLogo?: string;
  favicon?: string;

  // Config Settings
  adminEmail?: string;
  supportEmail?: string;
  helplineNumber?: string;
  inquiryNumber?: string;
  whatsNumber?: string;
  emergencyNumber?: string;
  companyName?: string;
  websiteLink?: string;
  address?: string;
  facebookLink?: string;
  linkedinLink?: string;
  twitterLink?: string;
  youtubeLink?: string;
  pinterestLink?: string;
  googlePlayAppLink?: string;
  iosAppLink?: string;

  // Contact Us Settings
  contactUsMobile?: string;
  contactUsMail?: string;
  contactUsHotline?: string;
  contactUsHeadOffice?: string;
  contactUsBranchOffice?: string;
  contactUsHoursOperation?: string;

  // Content Settings
  aboutUs?: string;
  ourVision?: string;
  privacy?: string;
  termsCondition?: string;
  howCanSignup?: string;
  refundPolicy?: string;
  academicPolicy?: string;
  contactUsContent?: string;

  // Footer Settings
  footerTitle?: string;
  footerCompanyName?: string;
  footerAddress?: string;
  gstNumber?: string;
  footerSupportEmail?: string;
  footerWhatsappNumber?: string;
  footerHelplineNumber?: string;
  footerInquiryNumber?: string;
  footerTwitterLink?: string;
  footerFbLink?: string;
  instaLink?: string;
  footerYoutubeLink?: string;
  footerLinkedinLink?: string;
}
