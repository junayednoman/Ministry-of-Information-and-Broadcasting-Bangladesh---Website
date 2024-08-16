export type TSubmenuItem = { label: string; link: string };
export type TSubmenuItems = { title?: string; items: TSubmenuItem[] };

const ministryItems: TSubmenuItem[] = [
  { label: "History & Activities", link: "#" },
  { label: "Mission & Vision", link: "#" },
  { label: "List of Ex-ministers", link: "#" },
  { label: "Senior Secretary", link: "#" },
  { label: "List of Ex-secretaries", link: "#" },
  { label: "Organogram", link: "#" },
  { label: "Allocation of Business", link: "#" },
  { label: "Success & Achievements", link: "#" },
];
const manpowerItems: TSubmenuItem[] = [
  { label: "Officers", link: "#" },
  { label: "Work Distribution", link: "#" },
  { label: "Information Officer", link: "#" },
  { label: "GRS Officer", link: "#" },
  { label: "Appellate Officer", link: "#" },
  { label: "Focal Point Officers", link: "#" },
];
const ministryServicesItems: TSubmenuItem[] = [
  { label: "Citizen Charter", link: "#" },
  { label: "List of Citizen e-Services", link: "#" },
  { label: "List of Other Services", link: "#" },
];

export const aboutItems = [
  {
    title: "Ministry",
    items: ministryItems,
  },
  {
    title: "Manpower",
    items: manpowerItems,
  },
  {
    title: "Services of Ministry",
    items: ministryServicesItems,
  },
];

const institutionItems1 = [
  { label: "Press Information Department", link: "#" },
  { label: "Bangladesh Betar", link: "#" },
  { label: "Bangladesh Television", link: "#" },
  { label: "Department of Films & Publications", link: "#" },
  { label: "Department of Mass Communication", link: "#" },
  { label: "Bangladesh Press Council", link: "#" },
];
const institutionItems2 = [
  { label: "Bangladesh Film Development Corporation", link: "#" },
  { label: "Bangladesh Film Archive", link: "#" },
  { label: "Press Institute Bangladesh", link: "#" },
  { label: "Bangladesh Sangbad Sangstha", link: "#" },
  { label: "National Institute of Mass Communication", link: "#" },
];
const institutionItems3 = [
  { label: "Bangladesh Film Censor Board", link: "#" },
  { label: "Information Commission", link: "#" },
  { label: "Bangladesh Film and Television Institute", link: "#" },
  { label: "Bangladesh Journalist Welfare Trust", link: "#" },
];

const projectItems1 = [
  { label: "Running Projects", link: "#" },
  { label: "Completed Projects", link: "#" },
];

export const institutionItems = [
  {
    items: institutionItems1,
  },
  {
    items: institutionItems2,
  },
  {
    items: institutionItems3,
  },
];

export const projectItems = [
  {
    items: projectItems1,
  },
];

const contactItems1 = [{ label: "Office Address", link: "#" }];
const commentItems = [
  { label: "Your opinion", link: "#" },
  { label: "Draft Law/Policy", link: "#" },
];

export const contactItems = [
  {
    title: "Contact",
    items: contactItems1,
  },
  {
    title: "Comment",
    items: commentItems,
  },
];
