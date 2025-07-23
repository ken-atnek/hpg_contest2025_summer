/* =======================================
 * ランキングデータ
 * URL:src/data/rankingData.ts
 * Created: 2025-07-03
 * Last updated: 2025-07-11
 * ======================================= */

export type RankingItem = {
  id: number;
  rank: number;
  castId: string;
  size?: string;
};

export const rankingData: Record<string, RankingItem[]> = {
  first: [
    {
      id: 1,
      rank: 1,
      castId: 'fu_villa_kana',
      size: 'Age.35 / T.158 / B.84 [D] / W.56 / H.85',
    },
    { id: 2, rank: 2, castId: 'km_hot_mio' },
    { id: 3, rank: 3, castId: 'km_hot_anri' },
    { id: 4, rank: 4, castId: 'kt_lip_momoka' },
    { id: 5, rank: 5, castId: 'yh_dandy_niko' },
    { id: 6, rank: 6, castId: 'km_hot_ran' },
    { id: 7, rank: 7, castId: 'yh_dandy_seri' },
    { id: 8, rank: 8, castId: 'km_hot_sara' },
    { id: 9, rank: 9, castId: 'km_hot_yua' },
    { id: 10, rank: 10, castId: 'kt_hot_himeno' },
    { id: 11, rank: 11, castId: 'km_hot_erena' },
    { id: 12, rank: 12, castId: 'yh_mr_nina' },
    { id: 13, rank: 13, castId: 'fu_villa_ren' },
    { id: 14, rank: 14, castId: 'kb_hot_kazuha' },
    { id: 15, rank: 14, castId: 'km_villa_sena' },
    { id: 16, rank: 16, castId: 'kt_lip_aina' },
    { id: 17, rank: 17, castId: 'km_villa_kurena' },
    { id: 18, rank: 18, castId: 'kt_hot_orina' },
    { id: 19, rank: 19, castId: 'yh_mr_rin' },
    { id: 20, rank: 20, castId: 'kt_villa_rei' },
  ],
  second: [
    {
      id: 1,
      rank: 1,
      castId: 'fu_villa_kana',
      size: 'Age.35 / T.158 / B.84 [D] / W.56 / H.85',
    },
    { id: 2, rank: 2, castId: 'km_hot_mio' },
    { id: 3, rank: 3, castId: 'km_villa_riho' },
    { id: 4, rank: 4, castId: 'km_hot_anri' },
    { id: 5, rank: 5, castId: 'kt_part2_mai' },
    { id: 6, rank: 6, castId: 'kt_hot_himeno' },
    { id: 7, rank: 7, castId: 'km_hot_saya' },
    { id: 8, rank: 8, castId: 'fu_hot_arisu' },
    { id: 9, rank: 9, castId: 'km_hot_erena' },
    { id: 10, rank: 10, castId: 'yh_dandy_seri' },
    { id: 11, rank: 11, castId: 'yh_mr_nina' },
    { id: 12, rank: 12, castId: 'fu_villa_ren' },
    { id: 13, rank: 12, castId: 'km_villa_hana' },
    { id: 14, rank: 14, castId: 'fu_villa_hikaru' },
    { id: 15, rank: 15, castId: 'yh_dandy_niko' },
    { id: 16, rank: 16, castId: 'km_hot_ran' },
    { id: 17, rank: 17, castId: 'yh_mr_rin' },
    { id: 18, rank: 18, castId: 'yh_club_honon' },
    { id: 19, rank: 19, castId: 'kt_part2_sakura' },
    { id: 20, rank: 20, castId: 'yh_dandy_hinano' },
  ],
};
