export interface School {
  school: string;
  degree: string;
  location: string;
  dates: string;
  gpa: string;
}

export const education: School[] = [
  {
    school: 'State University of New York at Buffalo',
    degree: 'MS Engineering Science, Data Science',
    location: 'Buffalo, NY',
    dates: 'August 2024 to December 2025',
    gpa: '4.0 / 4.0',
  },
  {
    school: "Vivekanand Education Society's Institute of Technology, University of Mumbai",
    degree: 'BE Artificial Intelligence and Data Science',
    location: 'Mumbai, India',
    dates: 'September 2020 to May 2024',
    gpa: '9.18 / 10.0',
  },
];
