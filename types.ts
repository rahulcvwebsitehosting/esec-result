export interface ResultCardProps {
  department: string;
  departmentCode: string;
  semester: string;
  regulation: string;
  examMonth: string;
  publishedDate: string;
  icon: string;
  isNew?: boolean;
  isPopular?: boolean;
  onDownload: (dept: string) => void;
  onView: (dept: string) => void;
  delay: string;
}

export interface ToastMessage {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

export interface SelectOption {
  value: string;
  label: string;
}