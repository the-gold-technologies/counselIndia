export interface LearnerItem {
  id: number;
  name: string;
  programname: string;
  rci_number: string;
  profession?: string;
  skills: string;
  image?: string;
  counsellor_folder_S3?: string;
}
