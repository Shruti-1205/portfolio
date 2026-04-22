export interface Publication {
  title: string;
  venue: string;
  year: string;
  url: string;
  note?: string;
}

export const publications: Publication[] = [
  {
    title: 'Enhancing Dialogue Systems with Adaptive Decision Boundaries and Multi-task Learning for Open Intent Recognition',
    venue: 'International Journal of Innovative Research in Technology (IJIRT)',
    year: '2024',
    url: 'https://ijirt.org/publishedpaper/IJIRT168142_PAPER.pdf',
  },
  {
    title: 'Journal publication, International Journal of Information Technology',
    venue: 'Springer IJIT',
    year: '2023',
    url: 'https://link.springer.com/article/10.1007/s41870-023-01285-9',
    note: 'Title pending update on live site',
  },
  {
    title: 'Anomaly Detection in Time Series using Unsupervised Machine Learning Approach',
    venue: 'International Journal of Computer Applications (IJCA), Volume 184, Issue 35',
    year: '2022',
    url: 'https://www.ijcaonline.org/archives/volume184/number35/devlekar-2022-ijca-922348.pdf',
  },
];
