/* =======================================
 * エリアデータ
 * URL:src/data/areaData.ts
 * Created: 2025-07-03
 * Last updated: 2025-07-03
 * ======================================= */
export type Area = {
  id: string;
  nameJp: string;
  nameEn: string;
  bgColor: string;
  titleImage: string;
};

export const areas: Area[] = [
  {
    id: 'yokohama',
    nameJp: '横浜',
    nameEn: 'YOKOHAMA',
    bgColor: '#330028',
    titleImage: '/images/photo_yokohama.webp',
  },
  {
    id: 'kyoto',
    nameJp: '京都',
    nameEn: 'KYOTO',
    bgColor: '#070033',
    titleImage: '/images/photo_kyoto.webp',
  },
  {
    id: 'kobe',
    nameJp: '神戸',
    nameEn: 'KOBE',
    bgColor: '#2D1906',
    titleImage: '/images/photo_kobe.webp',
  },
  {
    id: 'fukuoka',
    nameJp: '福岡',
    nameEn: 'FUKUOKA',
    bgColor: '#082B25',
    titleImage: '/images/photo_fukuoka.webp',
  },
  {
    id: 'kumamoto',
    nameJp: '熊本',
    nameEn: 'KUMAMOTO',
    bgColor: '#2B0808',
    titleImage: '/images/photo_kumamoto.webp',
  },
];
